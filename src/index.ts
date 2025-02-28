import dotenv from 'dotenv';
dotenv.config();

import express from 'express';
import http from 'http';
import { Server, Socket } from 'socket.io';
import { v4 as uuidv4 } from 'uuid';
import seedrandom from 'seedrandom';

import EloRating from 'elo-rating';

import database from './database';
import { Match } from './game';

import { createNewBoard, defaultSubmoveState, makeMove, COMPETITIVE_DEFAULTS, NORMAL_DEFAULTS, getCombos, getJuiceLevel, highestTile, COSM_PALETTES, getLevel, COSM_BANNERS, COSM_NAME_COLORS } from './tetris';

const K_VALUE = 100;

const basePath = '/';
const port = 8080;

const app: any = express();
app.use(basePath, express.static('dist'));
const server = http.createServer(app);

const io = new Server(server);

database.connect();

server.listen(port, () => {
    console.log(`Server started. Listening on port ${port}.`);
    printMemoryUsage();
});

const users = new Map<string, string>();
const matches = new Map<string, Match>();

setInterval(tick, 50);
let ticks = 0;

let leaderboardCache = { normal: [], competitive: [], level: [], juice: [] };
const getLeaderboardCache = async () => {
    leaderboardCache =  { normal: await database.getLeaderboard(false), competitive: await database.getLeaderboard(true), level: await database.getLevelLeaderboard(), juice: await database.getJuiceLeaderboard() };
}

getLeaderboardCache();

let searching = 0;

function printMemoryUsage() {
    console.log(process.memoryUsage());
}

function getOnlineStats() {
    const total = io.sockets.sockets.size;
    let inMatch = 0, inLobby = 0, inGame = 0, inSoloGame = 0;
    for (const match of matches.values()) {
        inMatch += match.players.length;
        if (match.playing) {
            if (match.solo) {
                inGame += match.players.length;
            } else {
                inSoloGame += match.players.length;
            }
        } else {
            inLobby += match.players.length;
        }
    }

    return {
        total,
        inMatch,
        inLobby,
        inGame,
        inSoloGame,
        matches: matches.size,
    }
}

setInterval(printMemoryUsage, 3_600_000);

io.on('connection', async (socket: Socket) => {
    const secret = socket.handshake.query.id;

    console.log(`Connected [${socket.id}]: ${secret}`);

    if (typeof (secret) === 'undefined' || secret === null || secret === 'null') {
        socket.emit('register', {
            registered: false,
            error: 'NULL_ID'
        });
    } else {

        const user = await database.findUser({ secret });

        if (!!user) {
            register(user, socket);

            socket.emit('register', {
                registered: true,
                error: null
            });

            socket.join(user._id);
        } else {
            socket.emit('register', {
                registered: false,
                error: 'INVALID_ID'
            });
        }

    }

    socket.on('disconnect', () => {
        console.log(`Disconnected [${socket.id}]`);

        leaveMatch(socket);

        if (users.has(socket.id)) {
            users.delete(socket.id);
        }
    });

    socket.on('create_account', async (data: any) => {
        if (typeof (data.username) === 'undefined' || data.username === null) {
            socket.emit('register', {
                registered: false,
                error: 'INVALID_USERNAME'
            });
            return;
        }

        const username = data.username.trim().substring(0, 16);

        const user = await database.newUser(username);
        
        register(user, socket);

        socket.emit('register', {
            registered: true,
            error: null,
        });

        socket.join(user._id);

        socket.emit('set_id', {id: user.secret});
        
    });

    socket.on('player_data', async () => {

        if (!users.has(socket.id)) { 
            sendError(socket, 'player_data', 'NOT_REGISTERED');
            return; 
        }
        const id = users.get(socket.id);

        const user = await database.findUser({ _id: id });
        if (!user) { 
            sendError(socket, 'player_data', 'INVALID_ID');
            return;
        }

        socket.emit('player_data', {
            user,
            leaderboard: leaderboardCache,
            online: getOnlineStats(),
            normalRank: await database.getRank(id, false),
            competitiveRank: await database.getRank(id, true),
        });
    });

    socket.on('purchase', async (data: { type: 'palette' | 'nameColor' | 'banner', which: string }) => {
        const id = users.get(socket.id);
        const user = await database.findUser({ _id: id });
        const { type, which } = data;

        console.log(type, which);
        if (type === 'palette') {
            if (COSM_PALETTES[which] && 
                !user.palettesUnlocked.includes(which) && 
                user.juice >= COSM_PALETTES[which].juiceCost && 
                getLevel(user.xp) >= COSM_PALETTES[which].levelRequirement
            ) {
                user.palettesUnlocked = [...user.palettesUnlocked, which];
                user.currentPalette = which;
                user.juice = user.juice - COSM_PALETTES[which].juiceCost;
                await user.save();
                socket.emit('player_data_quiet', { user });
            }
        } else if (type === 'banner') {
            if (COSM_BANNERS[which] && 
                !user.bannersUnlocked.includes(which) && 
                user.juice >= COSM_BANNERS[which].juiceCost && 
                getLevel(user.xp) >= COSM_BANNERS[which].levelRequirement
            ) {
                user.bannersUnlocked = [...user.bannersUnlocked, which];
                user.currentBanner = which;
                user.juice = user.juice - COSM_BANNERS[which].juiceCost;
                await user.save();

                socket.emit('player_data_quiet', { user });
            }
        } else if (type === 'nameColor') {
            if (COSM_NAME_COLORS[which] && 
                !user.nameColorsUnlocked.includes(which) && 
                user.juice >= COSM_NAME_COLORS[which].juiceCost && 
                getLevel(user.xp) >= COSM_NAME_COLORS[which].levelRequirement
            ) {
                user.nameColorsUnlocked = [...user.nameColorsUnlocked, which];
                user.currentNameColor = which;
                user.juice = user.juice - COSM_NAME_COLORS[which].juiceCost;
                await user.save();

                socket.emit('player_data_quiet', { user });
            }
        }
    });

    socket.on('equip', async (data: { type: 'palette' | 'nameColor' | 'banner', which: string }) => {
        const id = users.get(socket.id);
        const user = await database.findUser({ _id: id });
        const { type, which } = data;

        if (type === 'palette') {
            if (user.palettesUnlocked.includes(which)) {
                user.currentPalette = which;
                await user.save();
                socket.emit('player_data_quiet', { user });
            }
        } else if (type === 'nameColor') {
            if (user.nameColorsUnlocked.includes(which)) {
                user.currentNameColor = which;
                await user.save();
                socket.emit('player_data_quiet', { user });
            }
        } else if (type === 'banner') {
            if (user.bannersUnlocked.includes(which)) {
                user.currentBanner = which;
                await user.save();
                socket.emit('player_data_quiet', { user });
            }
        }
    });

    socket.on('create_match', async (data) => {
        const match = await createNewGame(socket);
        if (data && data.solo) {
            if (data.sprint > 0) {
                match.rules.sprint = data.sprint;
            } else {
                match.rules.sprint = 0;
            }
            match.startCountdown = 1;
        }
    });

    socket.on('join_match', async (data: any) => {
        const code = data.code;

        for (const [id, match] of matches) {
            if (code === match.joinCode) {
                joinMatch(socket, match);
                return;
            }
        }

        socket.emit('match_found', { error: true, message: `Could not find match with code: "${code}"` });
    });

    socket.on('match_options', async (data: any) => {
        const id = users.get(socket.id);
        const match = getPlayerMatch(id);

        if (id === match.leader && !match.playing) {

            if (data.options) {
                match.options = {
                    public: typeof(data.options.public) === 'undefined' ? true : data.options.public,
                    allowJoining: typeof(data.options.allowJoining) === 'undefined' ? true : data.options.allowJoining,
                    ranked: typeof(data.options.ranked) === 'undefined' ? true : data.options.ranked,
                }
            }

            if (data.rules) {
                const competitive = data.rules.competitive || false;
                match.rules = {
                    competitive,
                    initialSpeed: competitive ? COMPETITIVE_DEFAULTS.initialSpeed : (typeof(data.rules.initialSpeed) === 'undefined' ? NORMAL_DEFAULTS.initialSpeed : data.rules.initialSpeed),
                    resendGarbage: competitive ? COMPETITIVE_DEFAULTS.resendGarbage : (typeof(data.rules.resendGarbage) === 'undefined' ? NORMAL_DEFAULTS.resendGarbage : data.rules.resendGarbage),
                    forgivingCombos: competitive ? COMPETITIVE_DEFAULTS.forgivingCombos : (typeof(data.rules.forgivingCombos) === 'undefined' ? NORMAL_DEFAULTS.forgivingCombos : data.rules.forgivingCombos),
                    garbageTurns: competitive ? COMPETITIVE_DEFAULTS.garbageTurns : (typeof(data.rules.garbageTurns) === 'undefined' ? NORMAL_DEFAULTS.garbageTurns : data.rules.garbageTurns),
                    garbageDefense: competitive ? COMPETITIVE_DEFAULTS.garbageDefense : (typeof(data.rules.garbageDefense) === 'undefined' ? NORMAL_DEFAULTS.garbageDefense : data.rules.garbageDefense),
                    comboIgnoresIncoming: competitive ? COMPETITIVE_DEFAULTS.comboIgnoresIncoming : (typeof(data.rules.comboIgnoresIncoming) === 'undefined' ? NORMAL_DEFAULTS.comboIgnoresIncoming : data.rules.comboIgnoresIncoming),
                    sprint: competitive ? COMPETITIVE_DEFAULTS.sprint : (typeof(data.rules.sprint) === 'undefined' ? NORMAL_DEFAULTS.sprint : data.rules.sprint)
                }
            }

        }
        
    });

    socket.on('find_match', async () => {
        searching += 1;
        const search = async (tries: number) => {
            const validMatches = Array.from(matches.values()).filter(match => !match.playing && match.options.public && match.options.allowJoining);
            if (searching > 1) {
                // make a new game
                const match = await createNewGame(socket);
                match.options.public = true;
                searching -= 1;
                return;
            }
            if (tries > 30) {
                socket.emit('match_found', { error: true, message: 'Could not find a match. Try creating one.' });
                searching -= 1;
                return;
            }
            if (validMatches.length > 0) {
                const match = validMatches[Math.floor(Math.random() * validMatches.length)];
                joinMatch(socket, match);
                searching -= 1;
            } else {
                setTimeout(() => search(tries + 1), 1000)
            }
        }
        search(0);

    });

    socket.on('leave_match', async (data: any) => {
        leaveMatch(socket);
    });

    socket.on('ready', (data) => {
        const id = users.get(socket.id);
        const match = getPlayerMatch(id);
        match.ready[id] = !!data.ready;
    });

    socket.on('move', async (move: any) => {
        let match: Match; 
        for (let m of matches.values()) {
            if (m.players.includes(users.get(socket.id))) {
                match = m;
                break;
            }
        }
        if (match) {
            const id = users.get(socket.id);
            const board = match.boards[id];
            
            const prevLost = board.lost;
            match.boards[id] = makeMove(move.move, board, seedrandom, match.rules, Date.now() < match.garbageBuffer[id]);
            match.boards[id].move += 1;

            if (!prevLost && match.boards[id].lost) {
                match.kills[board.lastDamager] += 1;
            }

            if (!match.playing) {
                return;
            } 
            const clears = match.boards[id].clears;
            if (clears > 0) {

                const combos = getCombos(match.boards[id].combo);
                const lastCombo = combos[combos.length - 1];

                const alivePlayers = match.players.filter(id => !match.boards[id].lost);
                if (alivePlayers.length >= 2 && match.rules.sprint <= 0) {
                    const index = match.players.indexOf(id);
                    let otherIndex: number;
                    if (alivePlayers.length === 2) {
                        otherIndex = match.players.indexOf(alivePlayers[0] === id ? alivePlayers[1] : alivePlayers[0]);
                    } else if (alivePlayers.length > 2 && match.states[id].attackOption === 1) { // Kills (gets highest line)
                        let highest = 40;
                        let highestId = '';
                        for (let player of alivePlayers) {
                            if (player !== id) {
                                const high = highestTile(match.boards[player])
                                if (high < highest) {
                                    highest = high;
                                    highestId = player;
                                }
                                break;
                            }
                        }
                        otherIndex = match.players.indexOf(highestId);
                    } else if (alivePlayers.length > 2 && match.states[id].attackOption === 2 // Revenge
                        && match.boards[id].lastDamager !== id 
                        && match.players.includes(match.boards[id].lastDamager)
                        && !match.boards[match.boards[id].lastDamager].lost) {
                        otherIndex = match.players.indexOf(match.boards[id].lastDamager);
                    } else if (alivePlayers.length > 2 && match.states[id].attackOption === 3) { // Highest juice
                        let highest = 0;
                        let highestId = '';
                        for (let player of alivePlayers) {
                            if (player !== id) {
                                const high = match.boards[player].juice;
                                if (high > highest) {
                                    highest = high;
                                    highestId = player;
                                }
                                break;
                            }
                        }
                        otherIndex = match.players.indexOf(highestId);
                    } else if (alivePlayers.length > 2 && match.states[id].attackOption === 4) { // Lowest juice
                        let lowest = 9999999999999;
                        let lowestId = '';
                        for (let player of alivePlayers) {
                            if (player !== id) {
                                const val = match.boards[player].juice;
                                if (val < lowest) {
                                    lowest = val;
                                    lowestId = player;
                                }
                                break;
                            }
                        }
                        otherIndex = match.players.indexOf(lowestId);
                    } else {
                        otherIndex = Math.floor(Math.random() * alivePlayers.length);
                        while (otherIndex === index) {
                            otherIndex = Math.floor(Math.random() * alivePlayers.length);
                        }
                    }
                    
                    const other = match.players[otherIndex];

                    if (!other) {
                        for (let i = 0; i < alivePlayers.length; i += 1) {
                            if (alivePlayers[i] !== id) {
                                otherIndex = match.players.indexOf(alivePlayers[i]);
                                break;
                            }
                        }
                    }

                    if (other) {
                        const multiplier = (1 + getJuiceLevel(match.boards[id].juice) * 0.2);
                        match.boards[other].garbageQueue.push({
                            turns: match.rules.garbageTurns,
                            amount: Math.floor(lastCombo.lines.count * multiplier),
                            player: id,
                        });
                        match.boards[other].lastDamager = id;

                        const ping = (Date.now() - move.time);
                        match.garbageBuffer[other] = Date.now() + Math.min(ping, 300);
                    }

                }
                match.boards[id].clears = 0;
            }
        }
    });

    socket.on('submove_state', (data: any) => {
        const id = users.get(socket.id);
        const match = getPlayerMatch(id);

        if (!match) { return; }

        match.states[id] = {
            state: !data.state ? defaultSubmoveState() : {
                pieceX: data.state.pieceX || 3,
                pieceY: data.state.pieceY || 16,
                pieceRotation: data.state.pieceRotation || 0,
                submoves: data.state.submoves || [],
                lastMoveSuccessful: data.state.lastMoveSuccessful || true,
                dropMovedPiece: data.state.dropMovedPiece || false,
            },
            timers: !data.timers ? { fall: 0, dropping: false, shortDrop: 0, longDrop: 0 } : {
                fall: data.timers.fall || 0,
                dropping: data.timers.dropping || false,
                shortDrop: data.timers.shortDrop || 0,
                longDrop: data.timers.longDrop || 0,
            },
            attackOption: data.attackOption,
        }
    });
});

async function tick() {
    for (const [id, match] of matches) {
        match.newNotification = false;

        for (let id of match.players) {

            if (!match.boards[id]) {
                continue;
            }

            if (match.boards[id].lost && !match.playing) {
                match.boards[id] = createNewBoard(id, match.code, uuidv4(), seedrandom);
                io.to(id).emit('board_reset');
            }
        }

        if (!match.playing) {
            let sum = 0;
            for (let id of match.players) {
                if (match.ready[id]) {
                    sum += 1;
                }
            }

            if (match.startCountdown > 0) {
                match.solo = (match.players.length <= 1);
                if (match.startCountdown === 60) {
                    match.newNotification = true;
                    match.notification = '3';
                }
                if (match.startCountdown === 40) {
                    match.newNotification = true;
                    match.notification = '2';
                }
                if (match.startCountdown === 20) {
                    match.newNotification = true;
                    match.notification = '1';
                }

                match.startCountdown -= 1;
                if (match.startCountdown === 0) {
                    match.playing = true;
                    match.newNotification = true;
                    match.notification = 'Begin!';
                    match.startCountdown = -1;
                    match.ending = false;
                    match.over = false;
                    match.lastRemaining = match.players.length;

                    match.started = Date.now();

                    match.order = [];

                    match.results = {
                        winner: '',
                        rewards: {},
                    };

                    for (let pid of match.players) {
                        match.boards[pid] = createNewBoard(pid, match.code, uuidv4(), seedrandom);
                        match.ready[pid] = false;
                        match.states[pid] = { state: defaultSubmoveState(), timers: { fall: 0, dropping: false, shortDrop: 0, longDrop: 0 } };
                        match.kills[pid] = 0;
                        match.garbageBuffer[pid] = 0;
                    }
                    io.in(id).emit('board_reset');
                }
            } else {
                if (sum / match.players.length > 0.8) {
                    match.startCountdown = 60;
                }
            }
        } else {
            if (!match.over) {
                if (match.rules.sprint > 0) {
                    const res = Object.entries(match.boards).find(([id, board]) => board.lines >= match.rules.sprint);
                    if (res) {
                        const [winnerId, _] = res;
                        for (const id in match.boards) {
                            if (id !== winnerId) {
                                match.boards[id].lost = true;
                            }
                        }
                        
                        // sort players by who was closest
                        match.players.sort((aId, bId) => match.boards[aId].lines - match.boards[bId].lines);
                    }
                }

                for (let player of match.players) {
                    if (!match.order.includes(player) && match.boards[player].lost) {
                        match.order.push(player);
                    }
                }

                const alivePlayers = match.players.filter(id => !match.boards[id].lost);
                if (!match.ending && alivePlayers.length === 1 && (!match.solo || (match.rules.sprint > 0 && match.boards[alivePlayers[0]].lines >= match.rules.sprint))) {
                    match.newNotification = true;
                    match.notification = 'Winner!';

                    const winner = match.players.find(id => !match.boards[id].lost);
                    match.boards[winner].finishingMoves = 10;
                    match.results.winner = winner;

                    match.ended = Date.now();

                    match.ending = true;
                    match.over = false;
                } else if (alivePlayers.length === 0) {
                    match.newNotification = true;
                    match.notification = 'Game Over!';

                    match.ending = false;
                    match.over = true;

                    match.matchOverDelay = 0;

                    for (let player of match.players) {
                        if (!match.order.includes(player)) {
                            match.order.push(player);
                        }
                    }
                    
                    const eloChange = {};
                    const playerDatas = {};

                    for (let player of match.order) {
                        playerDatas[player] = await database.findUser({_id: player});
                    }

                    if (match.options.ranked && !match.solo) {
                        
                        for (let player of match.order) {
                            eloChange[player] = 0;
                            
                        }

                        const kValue = Math.ceil(K_VALUE / Math.sqrt(match.order.length - 1) / 2);

                        for (let i = 0; i < match.order.length; i += 1) {
                            const playerId = match.order[i];
                            const playerElo = match.rules.competitive ? playerDatas[playerId].compElo : playerDatas[playerId].normalElo;

                            for (let j = 0; j < match.order.length; j += 1) {
                                const otherId = match.order[j];
                                const otherElo = match.rules.competitive ? playerDatas[otherId].compElo : playerDatas[otherId].normalElo;

                                if (i !== j) {
                                    const elo = EloRating.calculate(playerElo, otherElo, (i > j), kValue);
                                    eloChange[playerId] += (elo.playerRating - playerElo);
                                    eloChange[otherId] += (elo.opponentRating - otherElo);
                                }
                            }
                        }
                    }

                    for (let id of match.order) {
                        const user = await database.findUser({ _id: id });
                        const elo = match.options.ranked && !match.solo ? Math.round(eloChange[id]) : 0;

                        if (match.rules.competitive) {
                            user.compElo += elo;
                        } else {
                            user.normalElo += elo;
                        }

                        if (match.players.includes(id)) {
                            const juice = match.boards[id].juice;
                            const lines = match.boards[id].lines;
                            const kills = match.kills[id];

                            const xp = Math.floor((juice / 100 + lines * 4) * (kills + 1));

                            match.results.rewards[id] = {
                                juice,
                                xp,
                                elo,
                            }

                            user.juice += juice;
                            user.xp += xp;
                        }
                        
                        await user.save();
                    }

                    getLeaderboardCache();
                }

                if (alivePlayers.length === 10 && match.lastRemaining > 10) {
                    match.newNotification = true;
                    match.notification = '10 remaining!';
                }
                if (alivePlayers.length === 5 && match.lastRemaining > 5) {
                    match.newNotification = true;
                    match.notification = '5 remaining!';
                }
                if (alivePlayers.length === 4 && match.lastRemaining > 4) {
                    match.newNotification = true;
                    match.notification = '4 remaining!';
                }
                if (alivePlayers.length === 3 && match.lastRemaining > 3) {
                    match.newNotification = true;
                    match.notification = '3 remaining!';
                }
                if (alivePlayers.length === 2 && match.lastRemaining > 2) {
                    match.newNotification = true;
                    match.notification = '2 remaining!';
                }

                match.lastRemaining = alivePlayers.length;
            } else {
                match.matchOverDelay += 1;
    
                if (match.matchOverDelay > 200) {
                    match.over = false;
                    match.playing = false;
                    match.ending = false;  
                    
                    match.started = 0;
                    match.ended = 0;
                    
                    match.matchOverDelay = -1;

                    for (let id of match.players) {
                        match.boards[id] = createNewBoard(id, match.code, uuidv4(), seedrandom);
                        const userData = await database.findUser({ _id: id });
                        userData.secret = 'shh!';
                        match.data[id] = userData;
                        io.to(id).emit('board_reset');
                        io.to(id).emit('player_data', { user: userData });
                    }
                }
            }
        } 
        
        io.in(id).emit('match_state', { match });
    }

    ticks += 1;
}

async function createNewGame(socket: Socket) {
    const code = 'game_' + uuidv4(); 
    socket.join(code); 

    let joinCode = (Math.floor(Math.random() * 9000) + 1000).toString();
    while (Array.from(matches.values()).some(match => match.joinCode === joinCode)) {
        joinCode = (Math.floor(Math.random() * 9000) + 1000).toString();
    }

    let leader = await database.findUser({ _id: users.get(socket.id) });
    leader.secret = 'shh';

    const players = [ leader._id ];

    const data = {};
    const boards = {};
    const ready = {};
    const states = {};
    const kills = {};
    const garbageBuffer = {};

    const order = [];

    data[leader._id] = leader;
    boards[leader._id] = createNewBoard(leader._id, code, uuidv4(), seedrandom);
    ready[leader._id] = false;
    states[leader._id] = { state: defaultSubmoveState(), timers: { fall: 0, dropping: false, shortDrop: 0, longDrop: 0 } };
    kills[leader._id] = 0;
    garbageBuffer[leader._id] = 0;

    const match : Match = {
        code,
        joinCode,
        
        options: {
            public: false,
            allowJoining: true,
            ranked: true,
        },

        playing: false,
        rules: NORMAL_DEFAULTS,
        leader: leader._id,

        players,
        order,

        started: 0,
        ended: 0,

        notification: '',
        newNotification: false,

        data,
        boards,
        ready,
        states,
        kills,
        garbageBuffer,

        startCountdown: -1,
        lastRemaining: -1,

        solo: false,
        ending: false,
        over: false,

        matchOverDelay: -1,

        results: {
            winner: '',
            rewards: {},
        }
    };

    matches.set(code, match);
    
    socket.emit('match_found', { match });
    socket.emit('board_reset');

    return match;
}

async function joinMatch(socket: Socket, match: Match) {
    if (!match.options.allowJoining) {
        socket.emit('match_found', { error: true, message: 'The match you attempted to join is not allowing joiners.' });
        return;
    }
    if (match.playing) {
        socket.emit('match_found', { error: true, message: 'The match you attempted to join is already in progress.' });
        return;
    }

    const id = users.get(socket.id);
    if (match.players.includes(id)) {
        socket.emit('match_found', { error: true, message: 'You are already in this match.' });
        return;
    }
    match.players.push(id);

    let user = await database.findUser({ _id: id });
    if (!user) {
        socket.emit('match_found', { error: true, message: 'There was an issue with your user. Reload the page, and if the issue persists, clear your local storage.'})
        return;
    }
    user.secret = 'shh';

    match.data[id] = user;

    const newBoard = createNewBoard(id, match.code, uuidv4(), seedrandom);
    match.boards[id] = newBoard;

    match.kills[id] = 0;
    match.ready[id] = false;
    match.states[id] = { state: defaultSubmoveState(), timers: { fall: 0, dropping: false, shortDrop: 0, longDrop: 0 } };
    match.garbageBuffer[id] = 0;

    io.in(match.code).emit('match_state', { match });
    socket.join(match.code);

    socket.emit('match_found', { match });
    socket.emit('board_reset');

    match.newNotification = true;
    match.notification = `${user.username} joined!`;

    return;
}

function getPlayerMatch(id: string) {
    for (const [code, match] of matches) {
        if (match.players.includes(id)) {
            return match;
        }
    }
    return null;
}

function leaveMatch(socket: Socket) {
    const id = users.get(socket.id);
    const match = getPlayerMatch(id);

    if (match) {
        const index = match.players.indexOf(id);

        match.newNotification = true;
        match.notification = `${match.data[id].username} left!`;

        if (index > -1) {
            match.players.splice(index, 1);
        }

        if (match.playing && !match.order.includes(id)) {
            match.order.push(id);
        }

        delete match.data[id];
        delete match.boards[id];
        delete match.ready[id];
        delete match.states[id];
        delete match.kills[id];
        delete match.garbageBuffer[id];

        if (match.players.length <= 0) {
            matches.delete(match.code);
        } else if (match.leader === id) {
            match.leader = match.players[0];
        }
    }
}

function register(user: any, socket: Socket) {
    users.set(socket.id, user._id);
}

function sendError(socket: Socket, packetType: string, error: string) {
    socket.emit('error', {
        error,
        type: packetType,
    });
}