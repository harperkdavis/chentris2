const socket = {
    io: null,
    connected: false,
    registered: false,
};

const input = { keys: {}, mouse: {} };

const game = {
    loading: true,
    loadMessage: "Starting...",

    isTyping: false,
    typedString: "",
    typeLengthLimit: 0,

    error: "",
    errorAnim: -1,

    inGame: false,
    gameData: {},
    localData: {},
    playerData: {},

    mainMenuAnim: 0,

    menu: menus.main,
    menuButtonAnims: [],
    menuAnim: 0,
    online: 0,

    matchAnim: 0,
    boardOrigin: [0, 0],
    boardTranslation: [0, 0],
    boardRotation: 0,
    boardScale: 0,

    boardNotifications: [],

    awaitingKeypress: false,
    settingsPieceX: 0,
    settingsRot: 0,
    keypressToChange: "",

    cosmeticsPage: "palette",

    hocoAnim: -1,

    leaderboard: {},
    normalRank: 0,
    competitiveRank: 0,
};

const HOCO_SECRET = [
    0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
    0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
    0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
    0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0,
    0, 0, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
    0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0,
    0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 1, 0, 0,
    0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0,
    0, 0, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0,
    0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
    0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1,
    0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0,
];

const state = {
    creatingNewAccount: false,
    loadingData: false,
    joiningMatch: false,
    inSubMenu: false,
    subMenu: null,
};

const images = {
    nathan: null,
    small: null,
    banners: {},
};

let SQUARE_SIZE = 0;

const controls = {
    left: 37,
    right: 39,
    down: 40,
    drop: " ".charCodeAt(0),
    rotateRight: 38,
    rotateLeft: "Z".charCodeAt(0),
    rotate180: "X".charCodeAt(0),
    hold: "C".charCodeAt(0),
};

let settings = null;

const defaultSettings = {
    moveSpeed: 2,
    moveDelayFactor: 2,
    screenShakeFactor: 1,
    "controls.left": 37,
    "controls.right": 39,
    "controls.down": 40,
    "controls.drop": " ".charCodeAt(0),
    "controls.rotateRight": 38,
    "controls.rotateLeft": "Z".charCodeAt(0),
    "controls.rotate180": "A".charCodeAt(0),
    "controls.hold": "C".charCodeAt(0),
};

const ON_OR_OFF = [
    { key: "on", value: true },
    { key: "off", value: false },
];

const MOVE_SPEED_SETTINGS = [
    { key: "fast", value: 2 },
    { key: "very fast", value: 1 },
    { key: "very slow", value: 20 },
    { key: "slow", value: 10 },
    { key: "reasonable", value: 5 },
    { key: "normal", value: 4 },
    { key: "slightly faster", value: 3 },
];
const MOVE_DELAY_FACTOR_SETTINGS = [
    { key: "normal", value: 2 },
    { key: "extended", value: 4 },
    { key: "none", value: 1 },
];
const SCREEN_SHAKE_SETTINGS = [
    { key: "normal", value: 1 },
    { key: "lots", value: 2 },
    { key: "nauseating", value: 4 },
    { key: "i wouldn't", value: 100 },
    { key: "off", value: 0 },
    { key: "reduced", value: 0.5 },
];

function resetState() {
    for (let val in state) {
        state[val] = false;
    }

    game.inGame = false;
    game.loading = false;
    game.loadMessage = "";

    game.isTyping = false;
    game.typedString = "";
    game.typeLengthLimit = 0;

    game.error = "";
    game.errorAnim = -1;

    game.inGame = false;
    game.gameData = {};
    game.localData = {};
    game.playerData = {};

    game.mainMenuAnim = 0;

    game.menu = menus.main;
    game.menuButtonAnims = [];
    game.menuAnim = 0;

    game.matchAnim = 0;

    game.boardOrigin = [width / 2, -height / 2];
    game.boardTranslation = [0, 0];
    game.boardRotation = 0;
    game.boardScale = 1;

    game.boardNotifications = [];

    game.awaitingKeypress = false;
    game.settingsPieceX = 0;
    game.settingsRot = 0;
    game.keypressToChange = "";

    game.cosmeticsPage = "palette";

    game.hocoAnim = -1;

    game.leaderboard = {};
    game.normalRank = 0;
    game.competitiveRank = 0;
}

function preload() {
    images.nathan = loadImage("./assets/nathan.png");
    images.small = loadImage("./assets/nathan32.png");

    for (const bannerName in COSM_BANNERS) {
        const imageName = COSM_BANNERS[bannerName].data;
        images.banners[bannerName] = loadImage(`./assets/cosmetics/${imageName}`);
    }
}

function setup() {
    createCanvas();
    windowResized();

    loadRankIcons();

    reset();
    connect();
}

function reset() {
    background(250);

    game.loading = true;
    game.loadMessage = "Starting...";

    socket.io = null;
    socket.connected = false;
    socket.registered = false;

    loadSettings();

    resetState();
}

function resetSettings() {
    settings = null;
    localStorage.removeItem("chentris_2_settings");
    loadSettings();
}

function getSetting(key) {
    if (settings[key]) {
        return settings[key];
    } else {
        settings[key] = defaultSettings[key];
        saveSettings();
        return defaultSettings[key];
    }
}

function setSetting(key, value) {
    settings[key] = value;
    saveSettings();
}

function loadSettings() {
    if (localStorage.getItem("chentris_2_settings")) {
        settings = {
            ...defaultSettings,
            ...JSON.parse(localStorage.getItem("chentris_2_settings")),
        };
    } else {
        saveSettings();
        loadSettings();
    }
}

function saveSettings() {
    localStorage.setItem("chentris_2_settings", JSON.stringify(settings || defaultSettings));
}

function getId() {
    return localStorage.getItem("chentris_2_id");
}

function setId(id) {
    return localStorage.setItem("chentris_2_id", id || "null");
}

function loadData() {
    resetState();

    game.loading = true;
    game.loadMessage = "Loading player...";

    state.loadingData = true;

    socket.io.emit("player_data");
}

function connect() {
    socket.io = io({ query: { id: getId(), forceNew: true } });
    socket.connected = true;

    game.loading = true;
    game.loadMessage = "Connecting...";

    socket.io.on("connect", () => {
        game.loading = true;
        game.loadMessage = "Registering...";
    });

    socket.io.on("register", (data) => {
        if (data.registered) {
            socket.registered = true;

            loadData();
        } else {
            if (data.error === "INVALID_ID") {
                game.error = "The id is invalid. If the issue persists, clear your local storage.";
                game.errorAnim = 99999;
            } else if (data.error === "NULL_ID" || data.error === "INVALID_USERNAME") {
                game.loading = false;
                game.loadMessage = "";

                game.isTyping = true;
                game.typedString = "";
                game.typeLengthLimit = 16;

                state.creatingNewAccount = true;

                if (data.error === "INVALID_USERNAME") {
                    game.error = "Your username is invalid.";
                    game.errorAnim = 5;
                }
            }
        }
    });

    socket.io.on("set_id", (data) => {
        setId(data.id);
    });

    socket.io.on("player_data", (data) => {
        game.loading = false;
        game.loadMessage = "";

        game.playerData = data.user;
        console.log(data);
        if (data.leaderboard) {
            game.leaderboard = data.leaderboard;
            game.online = data.online;
            game.normalRank = data.normalRank;
            game.competitiveRank = data.competitiveRank;
        }

        if (!data.inGame) {
            game.mainMenuAnim = 1;

            switchMenu("main");

            if (window.location.hash.length >= 1) {
                if (window.location.hash.length === 5) {
                    joinMatch(window.location.hash.substring(1));
                } else {
                    game.error = "Invalid match link.";
                    game.errorAnim = 5;
                }
            }
        }
    });

    socket.io.on("player_data_quiet", (data) => {
        console.log("quiet", data);
        game.playerData = data.user;
    });

    socket.io.on("error", (data) => {
        game.errorAnim = 5;
        game.error = `Fatal packet error type <${data.type}>: ${data.error}. Reloading in 5 seconds.`;
        setTimeout(() => {
            reset();
            connect();
        }, 5000);
    });

    socket.io.on("match_found", (data) => {
        game.loading = false;
        game.loadMessage = "";

        window.location.hash = "";
        if (data.error) {
            game.error = data.message;
            game.errorAnim = 5;
            return;
        }

        game.inGame = true;

        const board = deepCopyBoard(data.match.boards[game.playerData._id]);

        game.gameData = {
            match: data.match,
            moves: [],
        };

        game.matchAnim = 1;
        game.boardOrigin = [width / 2, -height / 2];
        game.boardTranslation = [0, 0];
        game.boardRotation = 0;
        game.boardScale = 1;

        game.boardNotifications = [];

        game.localData = {
            board,
            state: defaultSubmoveState(),
            stateAcc: 0,
            speed: game.gameData.match.rules.initialSpeed,
            timers: {
                fall: 0,
                dropping: false,
                shortDrop: 0,
                longDrop: 0,
            },
            deadAnim: 0,
            boardAnims: {},
            boardSizes: {},
            ready: false,
            attackOption: 0,
        };
    });

    socket.io.on("board_reset", () => {
        const board = deepCopyBoard(game.gameData.match.boards[game.playerData._id]);

        game.boardOrigin = [width / 2, -height / 2];
        game.boardTranslation = [0, 0];
        game.boardRotation = 0;
        game.boardScale = 1;

        game.gameData = {
            match: game.gameData.match,
            moves: [],
        };

        game.localData = {
            board,
            state: defaultSubmoveState(),
            stateAcc: 0,
            speed: game.gameData.match.rules.initialSpeed,
            timers: {
                fall: 0,
                dropping: false,
                shortDrop: 0,
                longDrop: 0,
            },
            deadAnim: 0,
            boardAnims: {},
            boardSizes: {},
            ready: false,
            attackOption: 0,
        };

        game.localData.board.move = 0;
    });

    socket.io.on("match_state", (data) => {
        if (!game.inGame) {
            return;
        }

        const board = data.match.boards[game.playerData._id];
        const moveNumber = game.localData.board.move;

        game.gameData = {
            match: data.match,
            moves: game.gameData.moves.filter((move) => move.num >= board.move),
        };

        game.localData.board = board;

        for (let move of game.gameData.moves) {
            game.localData.board = makeMove(move.move, game.localData.board, Math.seedrandom, game.gameData.match.rules);
        }

        game.localData.board.move = moveNumber;

        if (game.gameData.match.newNotification) {
            game.boardNotifications.push({
                text: game.gameData.match.notification,
                time: 0,
            });
        }
    });
}

function joinMatch(code) {
    socket.io.emit("join_match", { code });
    game.loading = true;
    game.loadMessage = "Joining...";
}

function windowResized() {
    resizeCanvas(windowWidth, windowHeight);
    SQUARE_SIZE = (height - 200) / 20;
}

function keyTyped() {
    if (game.isTyping) {
        if (game.typedString.length < game.typeLengthLimit && key !== "Enter") {
            game.typedString += key;
        }
    }
}

function keyPressed() {
    if (game.awaitingKeypress) {
        if (keyCode !== ESCAPE) {
            setSetting(game.keypressToChange, keyCode);
        }
        game.awaitingKeypress = false;
        game.keypressToChange = "";
    }

    if (keyCode === BACKSPACE && game.isTyping) {
        if (game.typedString.length > 0) {
            game.typedString = game.typedString.substring(0, game.typedString.length - 1);
        }
    }
    input.keys[keyCode] = 0;
}

function keyReleased() {
    input.keys[keyCode] = -1;
}

function mousePressed() {
    input.mouse[mouseButton] = 0;
}

function mouseReleased() {
    input.mouse[mouseButton] = -1;
}

function updateInput() {
    for (let key in input.keys) {
        if (input.keys[key] >= 0) {
            input.keys[key] += 1;
        }
    }
    for (let button in input.mouse) {
        if (input.mouse[button] >= 0) {
            input.mouse[button] += 1;
        }
    }
}

function clamp(a, mi, ma) {
    return min(max(a, mi), ma);
}

function update() {
    const deltaTime = frameRate() > 0 ? 1 / frameRate() : 0;

    if (game.errorAnim > 0) {
        game.errorAnim -= deltaTime;
    }

    if (state.creatingNewAccount) {
        if (input.keys["\r".charCodeAt(0)] === 0) {
            const username = game.typedString.trim().substring(0, 32);

            if (username.length > 0) {
                socket.io.emit("create_account", { username });
                game.loading = true;
                game.loadMessage = "Registering...";
                game.creatingNewAccount = false;
            }
        }
    }

    if (socket.registered) {
        game.mainMenuAnim = lerp(game.mainMenuAnim, 0, clamp(0.1 * 60 * deltaTime, 0, 1));
        game.menuAnim = lerp(game.menuAnim, 0, clamp(0.1 * 60 * deltaTime, 0, 1));
        game.matchAnim = lerp(game.matchAnim, 0, clamp(0.1 * 60 * deltaTime, 0, 1));

        if (!game.inGame) {
            if (state.joiningMatch) {
                const match = /[^0-9]/g;
                game.typedString = game.typedString.replace(match, "");

                const stopJoiningMatch = () => {
                    state.joiningMatch = false;
                    game.isTyping = false;
                    game.typedString = "";
                    game.typeLengthLimit = 0;
                };

                buttonState(width / 2 + 160, height / 2 - 50, 40, 20, () => {}, stopJoiningMatch);

                if (input.keys[ESCAPE] === 0) {
                    stopJoiningMatch();
                }

                if (game.typedString.length === 4) {
                    joinMatch(game.typedString);

                    game.isTyping = false;
                    game.typedString = "";
                    game.typeLengthLimit = -1;
                    state.joiningMatch = false;
                }
            } else if (state.inSubMenu) {
                const leave = () => {
                    state.inSubMenu = false;
                };

                buttonState(width / 2 + 460, height / 2 - 300, 40, 20, () => {}, leave);

                if (input.keys[ESCAPE] === 0) {
                    leave();
                }

                if (state.subMenu === submenus.Settings) {
                    function awaitKeypress(name) {
                        game.awaitingKeypress = true;
                        game.keypressToChange = name;
                    }

                    buttonState(
                        width / 2 + 140,
                        height / 2 - 250,
                        100,
                        20,
                        () => {},
                        () => awaitKeypress("controls.left")
                    );
                    buttonState(
                        width / 2 + 140,
                        height / 2 - 220,
                        100,
                        20,
                        () => {},
                        () => awaitKeypress("controls.right")
                    );
                    buttonState(
                        width / 2 + 140,
                        height / 2 - 190,
                        100,
                        20,
                        () => {},
                        () => awaitKeypress("controls.down")
                    );
                    buttonState(
                        width / 2 + 140,
                        height / 2 - 160,
                        100,
                        20,
                        () => {},
                        () => awaitKeypress("controls.drop")
                    );
                    buttonState(
                        width / 2 + 140,
                        height / 2 - 130,
                        100,
                        20,
                        () => {},
                        () => awaitKeypress("controls.rotateLeft")
                    );
                    buttonState(
                        width / 2 + 140,
                        height / 2 - 100,
                        100,
                        20,
                        () => {},
                        () => awaitKeypress("controls.rotateRight")
                    );
                    buttonState(
                        width / 2 + 140,
                        height / 2 - 70,
                        100,
                        20,
                        () => {},
                        () => awaitKeypress("controls.rotate180")
                    );
                    buttonState(
                        width / 2 + 140,
                        height / 2 - 40,
                        100,
                        20,
                        () => {},
                        () => awaitKeypress("controls.hold")
                    );

                    buttonState(
                        width / 2 + 340,
                        height / 2 + 260,
                        150,
                        30,
                        () => {},
                        () => resetSettings()
                    );

                    selectState(
                        width / 2 - 245,
                        height / 2 - 100,
                        100,
                        20,
                        MOVE_SPEED_SETTINGS,
                        () => settings["moveSpeed"],
                        (val) => {
                            settings["moveSpeed"] = val;
                            saveSettings();
                        }
                    );
                    selectState(
                        width / 2 - 245,
                        height / 2 - 50,
                        100,
                        20,
                        MOVE_DELAY_FACTOR_SETTINGS,
                        () => settings["moveDelayFactor"],
                        (val) => {
                            settings["moveDelayFactor"] = val;
                            saveSettings();
                        }
                    );
                    selectState(
                        width / 2 - 245,
                        height / 2,
                        100,
                        20,
                        SCREEN_SHAKE_SETTINGS,
                        () => settings["screenShakeFactor"],
                        (val) => {
                            settings["screenShakeFactor"] = val;
                            saveSettings();
                        }
                    );

                    if (
                        input.keys[settings["controls.left"]] % settings["moveSpeed"] === 0 &&
                        (input.keys[settings["controls.left"]] === 0 || input.keys[settings["controls.left"]] > settings["moveSpeed"] * settings["moveDelayFactor"])
                    ) {
                        game.settingsPieceX -= 1;
                    }

                    if (
                        input.keys[settings["controls.right"]] % settings["moveSpeed"] === 0 &&
                        (input.keys[settings["controls.right"]] === 0 || input.keys[settings["controls.right"]] > settings["moveSpeed"] * settings["moveDelayFactor"])
                    ) {
                        game.settingsPieceX += 1;
                    }

                    game.settingsPieceX = constrain(game.settingsPieceX, -5, 5);
                } else if (state.subMenu === submenus.Cosmetics) {
                    buttonState(
                        width / 2 - 490,
                        height / 2 - 290,
                        100,
                        30,
                        () => {},
                        () => {
                            game.cosmeticsPage = "palette";
                        }
                    );
                    buttonState(
                        width / 2 - 380,
                        height / 2 - 290,
                        100,
                        30,
                        () => {},
                        () => {
                            game.cosmeticsPage = "banner";
                        }
                    );
                    buttonState(
                        width / 2 - 270,
                        height / 2 - 290,
                        100,
                        30,
                        () => {},
                        () => {
                            game.cosmeticsPage = "nameColor";
                        }
                    );

                    let i = 0;
                    if (game.cosmeticsPage === "palette") {
                        for (const paletteName in COSM_PALETTES) {
                            const x = width / 2 - 490 + floor(i / 6) * 310;
                            const y = height / 2 - 240 + (i % 6) * 80;

                            if ((game.playerData.palettesUnlocked || ["Default"]).includes(paletteName)) {
                                if (game.playerData.currentPalette !== paletteName) {
                                    buttonState(
                                        x,
                                        y + 50,
                                        300,
                                        20,
                                        () => {},
                                        () => {
                                            socket.io.emit("equip", { type: "palette", which: paletteName });
                                        }
                                    );
                                }
                            } else {
                                const data = COSM_PALETTES[paletteName];
                                if (getLevel(game.playerData.xp) >= data.levelRequirement && game.playerData.juice >= data.juiceCost) {
                                    buttonState(
                                        x,
                                        y + 50,
                                        300,
                                        20,
                                        () => {},
                                        () => {
                                            socket.io.emit("purchase", { type: "palette", which: paletteName });
                                        }
                                    );
                                }
                            }

                            i += 1;
                        }
                    } else if (game.cosmeticsPage === "banner") {
                        for (const bannerName in COSM_BANNERS) {
                            const x = width / 2 - 490 + floor(i / 6) * 310;
                            const y = height / 2 - 240 + (i % 6) * 80;

                            if ((game.playerData.bannersUnlocked || ["Default"]).includes(bannerName)) {
                                if (game.playerData.currentBanner !== bannerName) {
                                    buttonState(
                                        x,
                                        y + 50,
                                        300,
                                        20,
                                        () => {},
                                        () => {
                                            socket.io.emit("equip", { type: "banner", which: bannerName });
                                        }
                                    );
                                }
                            } else {
                                const data = COSM_BANNERS[bannerName];
                                if (getLevel(game.playerData.xp) >= data.levelRequirement && game.playerData.juice >= data.juiceCost) {
                                    buttonState(
                                        x,
                                        y + 50,
                                        300,
                                        20,
                                        () => {},
                                        () => {
                                            socket.io.emit("purchase", { type: "banner", which: bannerName });
                                        }
                                    );
                                }
                            }

                            i += 1;
                        }
                    } else if (game.cosmeticsPage === "nameColor") {
                        for (const nameColor in COSM_NAME_COLORS) {
                            const x = width / 2 - 490 + floor(i / 6) * 310;
                            const y = height / 2 - 240 + (i % 6) * 80;

                            if ((game.playerData.nameColorsUnlocked || ["Default"]).includes(nameColor)) {
                                if (game.playerData.currentNameColor !== nameColor) {
                                    buttonState(
                                        x,
                                        y + 50,
                                        300,
                                        20,
                                        () => {},
                                        () => {
                                            socket.io.emit("equip", { type: "nameColor", which: nameColor });
                                        }
                                    );
                                }
                            } else {
                                const data = COSM_NAME_COLORS[nameColor];
                                if (getLevel(game.playerData.xp) >= data.levelRequirement && game.playerData.juice >= data.juiceCost) {
                                    buttonState(
                                        x,
                                        y + 50,
                                        300,
                                        20,
                                        () => {},
                                        () => {
                                            socket.io.emit("purchase", { type: "nameColor", which: nameColor });
                                        }
                                    );
                                }
                            }

                            i += 1;
                        }
                    }
                }
            } else {
                for (let i = 0; i < game.menu.length; i++) {
                    const mouseOver = mouseX < 300 && mouseY > 100 + i * 50 && mouseY < 140 + i * 50;

                    game.menuButtonAnims[i] = lerp(game.menuButtonAnims[i], mouseOver ? 1 : 0, clamp(0.5 * 60 * deltaTime, 0, 1));

                    if (input.mouse[LEFT] === 0 && mouseOver) {
                        game.menu[i].onClick();
                    }
                }
            }
        }
    }

    if (game.inGame) {
        if (input.keys["\r".charCodeAt(0)] === 0) {
            if (!game.gameData.match.playing) {
                game.localData.ready = !game.localData.ready;
                socket.io.emit("ready", { ready: game.localData.ready });
            }
        }

        buttonState(
            20,
            95,
            180,
            30,
            () => {},
            () => navigator.clipboard.writeText(`https://chentris2.hked.live/#${game.gameData.match.joinCode}`),
            !game.gameData.match.options.allowJoining
        );
        buttonState(
            20,
            130,
            180,
            30,
            () => {},
            () => {
                socket.io.emit("leave_match");
                reset();
                connect();
            },
            false
        );

        if (!game.inGame) {
            return;
        }

        function changeOption(name, newValue) {
            const newOptions = { ...game.gameData.match.options };
            newOptions[name] = newValue;
            socket.io.emit("match_options", { options: newOptions });
        }

        function changeRule(name, newValue) {
            const newRules = { ...game.gameData.match.rules };
            newRules[name] = newValue;
            socket.io.emit("match_options", { rules: newRules });
        }

        selectState(
            150,
            200,
            40,
            20,
            ON_OR_OFF,
            () => game.gameData.match.options.allowJoining,
            (v) => changeOption("allowJoining", v),
            false
        );
        selectState(
            150,
            225,
            40,
            20,
            ON_OR_OFF,
            () => game.gameData.match.options.public,
            (v) => changeOption("public", v),
            false
        );
        selectState(
            150,
            250,
            40,
            20,
            ON_OR_OFF,
            () => game.gameData.match.options.ranked,
            (v) => changeOption("ranked", v),
            false
        );

        const comp = game.gameData.match.rules.competitive;
        selectState(
            150,
            325,
            40,
            20,
            ON_OR_OFF,
            () => comp,
            (v) => changeRule("competitive", v),
            false
        );
        selectState(
            150,
            350,
            40,
            20,
            [
                { key: "slow", value: 80 },
                { key: "medium", value: 320 },
                { key: "fast", value: 640 },
                { key: "very fast", value: 1280 },
                { key: "good luck", value: 5120 },
                { key: "why", value: 40960 },
                { key: "snail", value: 20 },
            ],
            () => game.gameData.match.rules.initialSpeed,
            (v) => changeRule("initialSpeed", v),
            comp
        );
        selectState(
            150,
            375,
            40,
            20,
            ON_OR_OFF,
            () => game.gameData.match.rules.resendGarbage,
            (v) => changeRule("resendGarbage", v),
            comp
        );
        selectState(
            150,
            400,
            40,
            20,
            ON_OR_OFF,
            () => game.gameData.match.rules.forgivingCombos,
            (v) => changeRule("forgivingCombos", v),
            comp
        );
        selectState(
            150,
            425,
            40,
            20,
            [
                { key: "one", value: 1 },
                { key: "two", value: 2 },
                { key: "three", value: 3 },
            ],
            () => game.gameData.match.rules.garbageTurns,
            (v) => changeRule("garbageTurns", v),
            comp
        );
        selectState(
            150,
            450,
            40,
            20,
            ON_OR_OFF,
            () => game.gameData.match.rules.garbageDefense,
            (v) => changeRule("garbageDefense", v),
            comp
        );
        selectState(
            150,
            475,
            50,
            20,
            ON_OR_OFF,
            () => game.gameData.match.rules.comboIgnoresIncoming,
            (v) => changeRule("comboIgnoresIncoming", v),
            comp
        );
        selectState(
            150,
            500,
            50,
            20,
            [
                { key: "off", value: 0 },
                { key: "20 lines", value: 20 },
                { key: "40 lines", value: 40 },
                { key: "100 lines", value: 100 },
                { key: "1000 lines", value: 1000 },
                { key: "1000000 lines", value: 1_000_000 },
            ],
            () => game.gameData.match.rules.sprint,
            (v) => changeRule("sprint", v),
            comp
        );

        if (!game.inGame) {
            return;
        }

        for (let notif of game.boardNotifications) {
            notif.time += deltaTime;
        }
        game.boardNotifications = game.boardNotifications.filter((notif) => notif.time <= 1);

        if (game.hocoAnim >= 0 && game.hocoAnim <= 100) {
            game.hocoAnim += deltaTime * 10;
        } else if (game.hocoAnim > 100) {
            game.hocoAnim = -1;
        }

        if (input.keys["J".charCodeAt(0)] === 0) {
            game.hocoAnim = 0;
        }

        let origin = { x: 0, y: 0 };

        if (!game.gameData.match.playing || game.gameData.match.players.filter((id) => !game.gameData.match.boards[id].lost).length <= 1) {
            origin = { x: width / 2, y: height / 2 };
        } else {
            origin = { x: SQUARE_SIZE * 13, y: height / 2 };
        }

        game.boardOrigin[0] = lerp(game.boardOrigin[0], origin.x, clamp(0.1 * 60 * deltaTime, 0, 1));
        game.boardOrigin[1] = lerp(game.boardOrigin[1], origin.y, clamp(0.1 * 60 * deltaTime, 0, 1));

        game.boardTranslation[0] = lerp(game.boardTranslation[0], 0, clamp(0.1 * 60 * deltaTime, 0, 1));
        game.boardTranslation[1] = lerp(game.boardTranslation[1], 0, clamp(0.1 * 60 * deltaTime, 0, 1));

        game.boardRotation = lerp(game.boardRotation, 0, clamp(0.1 * 60 * deltaTime, 0, 1));
        game.boardScale = lerp(game.boardScale, 1, clamp(0.1 * 60 * deltaTime, 0, 1));

        game.localData.timers.fall += deltaTime;

        game.localData.stateAcc += deltaTime;

        if (!game.localData.board) {
            return;
        }

        if (game.localData.board.lost) {
            game.localData.deadAnim += deltaTime;
        } else {
            game.localData.deadAnim = lerp(game.localData.deadAnim, 0, clamp(0.5 * 60 * deltaTime, 0, 1));
        }

        if (game.localData.stateAcc > 1 / 20) {
            game.localData.stateAcc = 0;
            socket.io.emit("submove_state", {
                state: game.localData.state,
                timers: game.localData.timers,
                attackOption: game.localData.attackOption,
            });
        }

        if (game.localData.timers.dropping) {
            game.localData.timers.shortDrop += deltaTime * (input.keys[settings["controls.down"]] >= 0 ? 4 : 1);
            game.localData.timers.longDrop += deltaTime;
        }

        let move = null;

        if (input.keys[settings["controls.hold"]] === 0) {
            move = { type: "hold" };
            if (game.localData.board.canHold) {
                game.localData.state = defaultSubmoveState();
            }
        }

        const fallPerMinute = 60 / game.localData.speed;
        if (input.keys[settings["controls.down"]] % settings["moveSpeed"] === 0 || game.localData.timers.fall >= fallPerMinute) {
            game.localData.state = makeSubmove("down", game.localData.board, game.localData.state);

            let first = true;
            while (game.localData.timers.fall >= fallPerMinute) {
                if (!first) {
                    game.localData.state = makeSubmove("down", game.localData.board, game.localData.state);
                }
                first = false;
                game.localData.timers.fall -= fallPerMinute;
            }
        }

        if (
            input.keys[settings["controls.left"]] % settings["moveSpeed"] === 0 &&
            (input.keys[settings["controls.left"]] === 0 || input.keys[settings["controls.left"]] > settings["moveSpeed"] * settings["moveDelayFactor"])
        ) {
            game.localData.state = makeSubmove("left", game.localData.board, game.localData.state);
            if (game.localData.state.lastMoveSuccessful) {
                game.localData.timers.shortDrop = 0;

                game.boardTranslation[0] -= 2 * settings["screenShakeFactor"];
                game.boardRotation -= 0.002 * settings["screenShakeFactor"];
            }
        }

        if (
            input.keys[settings["controls.right"]] % settings["moveSpeed"] === 0 &&
            (input.keys[settings["controls.right"]] === 0 || input.keys[settings["controls.right"]] > settings["moveSpeed"] * settings["moveDelayFactor"])
        ) {
            game.localData.state = makeSubmove("right", game.localData.board, game.localData.state);
            if (game.localData.state.lastMoveSuccessful) {
                game.localData.timers.shortDrop = 0;

                game.boardTranslation[0] += 2 * settings["screenShakeFactor"];
                game.boardRotation += 0.002 * settings["screenShakeFactor"];
            }
        }

        if (input.keys[settings["controls.rotateRight"]] === 0) {
            game.localData.state = makeSubmove("rotateRight", game.localData.board, game.localData.state);
            if (game.localData.state.lastMoveSuccessful) {
                game.localData.timers.shortDrop = 0;

                game.boardRotation += 0.001 * settings["screenShakeFactor"];
            }
        }

        if (input.keys[settings["controls.rotateLeft"]] === 0) {
            game.localData.state = makeSubmove("rotateLeft", game.localData.board, game.localData.state);
            if (game.localData.state.lastMoveSuccessful) {
                game.localData.timers.shortDrop = 0;

                game.boardRotation -= 0.001 * settings["screenShakeFactor"];
            }
        }

        if (input.keys[settings["controls.rotate180"]] === 0) {
            game.localData.state = makeSubmove("rotate180", game.localData.board, game.localData.state);

            if (game.localData.state.lastMoveSuccessful) {
                game.localData.timers.shortDrop = 0;

                game.boardRotation -= 0.002 * settings["screenShakeFactor"];
            }
        }

        for (let i = 0; i < 5; i += 1) {
            if (input.keys[(i + 1).toString().charCodeAt(0)] === 0) {
                game.localData.attackOption = i;
            }
        }

        game.localData.timers.dropping = game.localData.state.pieceY === makeSubmove("drop", game.localData.board, game.localData.state).pieceY;

        if (
            input.keys[settings["controls.drop"]] === 0 ||
            game.localData.timers.shortDrop >= max(0.5, 120 / game.localData.speed) ||
            game.localData.timers.longDrop >= max(2, 640 / game.localData.speed)
        ) {
            if (input.keys[settings["controls.drop"]] === 0) {
                game.localData.state = makeSubmove("drop", game.localData.board, game.localData.state);
                game.boardTranslation[1] += 10 * settings["screenShakeFactor"];
            }
            move = { type: "move", submoves: game.localData.state.submoves };
            game.localData.timers = {
                fall: 0,
                dropping: false,
                shortDrop: 0,
                longDrop: 0,
            };
            game.localData.state = defaultSubmoveState();
        }

        if (move) {
            game.localData.board = makeMove(move, game.localData.board, Math.seedrandom, game.gameData.match.rules);
            socket.io.emit("move", { move, time: Date.now() });

            if (game.localData.board.clears > 0) {
                const clears = game.localData.board.clears;
                const squareClears = clears ** 2;

                game.boardRotation += clears * 0.1 * settings["screenShakeFactor"];
                game.boardScale += squareClears * 0.02 * settings["screenShakeFactor"];
            }

            game.gameData.moves.push({ move, num: game.localData.board.move });
            game.localData.board.move += 1;
        }

        if (game.gameData.match.playing) {
            let i = 0;
            const count = game.gameData.match.players.filter((id) => !game.gameData.match.boards[id].lost).length;
            const size = count <= 2 ? SQUARE_SIZE : (height - 150) / ceil(sqrt(count - 1)) / 24;

            let spectating = game.gameData.match.boards[game.playerData._id].lost;
            for (let id of game.gameData.match.players.filter((id) => id !== game.playerData._id)) {
                const idealPos = getIdealPos(i, count - 1, width - 200 - SQUARE_SIZE * 17, height - 200);
                idealPos[0] += SQUARE_SIZE * 17 + 100;
                idealPos[1] += 100;

                const isSpectator = spectating && !game.gameData.match.boards[id].lost;
                if (isSpectator) {
                    idealPos[0] = game.boardOrigin[0];
                    idealPos[1] = game.boardOrigin[1];
                }

                if (!game.localData.boardAnims[id]) {
                    game.localData.boardAnims[id] = [];
                    game.localData.boardAnims[id][0] = idealPos[0];
                    game.localData.boardAnims[id][1] = idealPos[1];
                    game.localData.boardAnims[id][2] = 0;
                    game.localData.boardSizes[id] = 0;
                }

                game.localData.boardAnims[id][0] = lerp(game.localData.boardAnims[id][0], idealPos[0], clamp(0.1 * 60 * deltaTime, 0, 1));
                game.localData.boardAnims[id][1] = lerp(game.localData.boardAnims[id][1], idealPos[1], clamp(0.1 * 60 * deltaTime, 0, 1));

                game.localData.boardSizes[id] = lerp(game.localData.boardSizes[id], isSpectator ? SQUARE_SIZE : size, clamp(0.05 * 60 * deltaTime, 0, 1));

                if (!game.gameData.match.boards[id].lost) {
                    if (!isSpectator) {
                        i += 1;
                    }
                } else {
                    const anim = game.localData.boardAnims[id][2] * 50;
                    const deadAnimY = anim ** 2 - 20 * anim;
                    const deadAnimX = -(anim * log(anim + 1));
                    game.localData.boardAnims[id][0] = idealPos[0] + deadAnimX;
                    game.localData.boardAnims[id][1] = idealPos[1] + deadAnimY;

                    game.localData.boardAnims[id][2] += deltaTime;
                }

                if (isSpectator) {
                    spectating = false;
                }
            }
        }
    }
}

function buttonState(x, y, w, h, onHover, onClick, disabled = false) {
    if (disabled) {
        return;
    }
    if (mouseX > x && mouseY > y && mouseX < x + w && mouseY < y + h) {
        onHover();
        if (input.mouse[LEFT] === 0) {
            onClick();
        }
    }
}

function drawButton(x, y, w, h, tx, onHover, onClick, disabled = false) {
    if (mouseX > x && mouseY > y && mouseX < x + w && mouseY < y + h) {
        onHover();
        if (input.mouse[LEFT] === 0) {
            onClick();
        }
    }

    if (disabled) {
        fill(200);
    }

    stroke(0);
    rect(x, y, w, h);

    textSize(16);
    textAlign(CENTER, CENTER);
    textStyle(NORMAL);

    fill(0);
    noStroke();
    text(tx, x + w / 2, y + h / 2);
}

function selectState(x, y, w, h, options, getValue, setValue, disabled = false) {
    if (!options) {
        return;
    }
    const value = getValue();
    const nextValue = options[mod(options.findIndex((option) => option.value === value) + 1, options.length)].value;
    buttonState(
        x,
        y,
        w,
        h,
        () => {},
        () => setValue(nextValue),
        disabled
    );
}

function drawSelect(x, y, w, h, options, getValue, disabled = false) {
    const value = getValue();
    const tx = options.find((option) => option.value === value).key;

    fill(250);
    drawButton(
        x,
        y,
        w,
        h,
        tx,
        () => fill(240),
        () => fill(230),
        disabled
    );
}

function drawError() {
    if (game.errorAnim > 0) {
        fill(250, 150, 150);
        stroke(0);
        rect(width / 2 - 300, 200, 600, 50);

        noStroke();
        fill(0);
        textAlign(CENTER, CENTER);
        textSize(16);
        text(game.error, width / 2, 225);
    }
}

function drawLoading() {
    fill(250);
    strokeWeight(1);
    stroke(0);

    rect(width / 2 - 100, height / 2 - 60, 200, 120);
    noStroke();
    fill(0);
    textAlign(CENTER, CENTER);
    textStyle(NORMAL);
    textSize(16);
    text("Loading...", width / 2, height / 2 - 40);

    tint(255);
    push();

    translate(width / 2, height / 2);
    rotate(millis() * 0.01);
    image(images.small, -16, -16);

    stroke(0);
    noFill();
    rect(-16, -16, 32, 32);
    pop();

    textSize(10);
    text(game.loadMessage, width / 2, height / 2 + 40);
}

function drawCreateAccount() {
    fill(250);
    strokeWeight(1);
    stroke(0);

    rect(width / 2 - 250, height / 2 - 125, 500, 200);

    fill(0);
    noStroke();

    textAlign(CENTER, CENTER);
    textStyle(BOLD);
    textSize(16);
    text("Chentris 2", width / 2, height / 2 - 90);

    textStyle(NORMAL);
    text("Welcome! Before continuing, please create a username.", width / 2, height / 2 - 50);
    text("Press enter to continue.", width / 2, height / 2 + 40);

    textSize(32);
    textWrap(CHAR);
    text(game.typedString + "_", width / 2 - 250, height / 2, 500);
}

function drawPiece(x, y, rot, size, piece, palette = "Default", trans = 255, strokeless = false) {
    const layout = getRotatedPiece(piece, rot);
    const color = COSM_PALETTES[palette].data[piece];
    strokeless ? noStroke() : stroke(0);
    fill(...color, trans);
    for (let i = 0; i < layout.length; i++) {
        for (let j = 0; j < layout[i].length; j++) {
            if (layout[i][j] === 1) {
                rect(x + j * size, y + i * size, size, size);
            }
        }
    }
}

function getIdealPos(index, size, wi, hi) {
    if (size <= 0) {
        return [0.5 * wi, 0.5 * hi];
    }
    const minSqrt = ceil(sqrt(size));
    const y = floor(index / minSqrt);
    const x = index % minSqrt;

    return [((x + 0.5) / minSqrt) * wi, ((y + 0.5) / minSqrt) * hi];
}

function drawBoard(board, state, timers, squareSize, detail, palette = "Default") {
    if (detail >= 0) {
        fill(250);
        stroke(0);
        rect(-5 * squareSize, -10 * squareSize, 10 * squareSize, 20 * squareSize);

        stroke(200);
        for (let i = 0; i < 19; i++) {
            line(-5 * squareSize + 1, (-9 + i) * squareSize, 5 * squareSize - 1, (-9 + i) * squareSize);
        }

        for (let i = 0; i < 9; i++) {
            line((-4 + i) * squareSize, -10 * squareSize + 1, (-4 + i) * squareSize, 10 * squareSize - 1);
        }
    }

    if (detail >= 2) {
        fill(250);
        stroke(0);
        rect(5 * squareSize, -10 * squareSize, 0.5 * squareSize, 20 * squareSize);
        rect(-5.5 * squareSize, -10 * squareSize, 0.5 * squareSize, 20 * squareSize);

        let sum = 0;
        for (let i = 0; i < board.garbageQueue.length; i++) {
            const garbage = board.garbageQueue[i];
            const amount = garbage.amount;
            sum += amount;
            if (garbage.turns === 1) {
                fill(250, 100 + 150 * sin(millis() * 0.04), 100);
            } else {
                fill(200);
            }
            rect(5 * squareSize, (10 - sum) * squareSize, 0.5 * squareSize, amount * squareSize);
        }
        const currentLevel = Math.floor(getJuiceLevel(board.juice));
        const nextLevel = currentLevel + 1;
        const progress = map(board.juice, getLevelJuice(currentLevel), getLevelJuice(nextLevel), 0, 1);
        stroke(0);
        fill(50 + random(0, 50), 100 + random(0, 50), 200 + random(0, 50));
        rect(-5.5 * squareSize, (10 - progress * 20) * squareSize, 0.5 * squareSize, progress * 20 * squareSize);
        for (let i = 0; i < currentLevel; i += 1) {
            fill(50 + random(0, 50), 100 + random(0, 50), 200 + random(0, 50));
            rect(-6 * squareSize, (9.5 - i * 0.5) * squareSize, 0.5 * squareSize, 0.5 * squareSize);
        }

        for (let i = 0; i < 5; i++) {
            drawPiece(6.5 * squareSize, (-10 + 4 * i) * squareSize, 0, squareSize, board.bag[i + 1], palette);
        }

        if (board.hold !== -1) {
            drawPiece((-6 - PIECES[board.hold].layout.length) * squareSize, -10 * squareSize, 0, squareSize, board.hold, palette, board.canHold ? 255 : 100);
        }
    }

    if (detail >= 1) {
        textAlign(TOP, CENTER);
        fill(0);
        noStroke();
        textSize(16);
        textStyle(NORMAL);

        drawPiece(
            (state.pieceX - 5) * squareSize,
            (state.pieceY - 30) * squareSize,
            state.pieceRotation,
            squareSize,
            board.bag[0],
            palette,
            timers.dropping ? (sin(millis() * 0.02) + 1) * 100 + 50 : 255
        );
    }

    if (detail >= 3) {
        const dropSubmove = makeSubmove("drop", board, state);

        drawPiece((dropSubmove.pieceX - 5) * squareSize, (dropSubmove.pieceY - 30) * squareSize, state.pieceRotation, squareSize, board.bag[0], palette, 100, true);
    }

    if (detail >= 1) {
        for (let i = 0; i < 40; i++) {
            for (let j = 0; j < 10; j++) {
                const index = i * 10 + j;
                const tile = board.tiles[index];
                if (tile >= 0) {
                    const color = COSM_PALETTES[palette].data[tile];
                    stroke(0);
                    fill(color[0], color[1], color[2]);
                    rect((-5 + j) * squareSize, (-30 + i) * squareSize, squareSize, squareSize);
                }
            }
        }
    }

    if (detail >= 5 && game.hocoAnim >= 0) {
        const anim = floor(game.hocoAnim);
        for (let y = 0; y < 20; y += 1) {
            const indexY = (y + anim) * 10;
            for (let x = 0; x < 10; x += 1) {
                const index = indexY + x;
                if (index >= 0 && index < HOCO_SECRET.length) {
                    const tile = HOCO_SECRET[index];

                    if (tile > 0) {
                        const color = PIECES[floor(random(0, 7))].color;
                        stroke(0);
                        fill(color[0], color[1], color[2]);
                        rect((-5 + x) * squareSize, (-30 + (y + 20)) * squareSize, squareSize, squareSize);
                    }
                }
            }
        }
    }

    if (detail >= 4) {
        const combos = getCombos(board.combo);
        const count = combos.length;
        if (count > 0) {
            noStroke();

            textAlign(RIGHT, CENTER);
            textStyle(NORMAL);
            textSize(16);
            let i = 0;
            let sumLines = 0;
            let juice = 0;
            for (let combo of combos) {
                sumLines += combo.lines.count;

                if (sumLines <= 1) {
                    fill(30, 50, 150);
                } else if (sumLines <= 2) {
                    fill(140, 60, 10);
                } else if (sumLines <= 3) {
                    fill(80, 30, 140);
                } else if (sumLines <= 4) {
                    fill(30, 150, 130);
                } else if (sumLines <= 5) {
                    fill(140, 130, 10);
                } else if (sumLines <= 6) {
                    fill(30, 140, 20);
                } else if (sumLines <= 7) {
                    fill(140, 30, 50);
                } else {
                    let r = random(0, 1) < 0.5;
                    let g = random(0, 1) < 0.5;
                    let b = random(0, 1) < 0.5 && !r && !g;

                    fill(r ? 250 : 50, g ? 250 : 50, b ? 250 : 50);
                }

                text(combo.name, -7 * squareSize, (-3.5 + i) * squareSize);
                rect(-6.75 * squareSize, (-3.9 + i) * squareSize, 0.8 * squareSize, 0.8 * squareSize, 5);

                let lines = parseInt(combo.original.substring(0, 1));
                if (lines) {
                    fill(250);
                    if (lines >= 1) {
                        rect(-6.65 * squareSize, (-3.8 + i) * squareSize, 0.25 * squareSize, 0.25 * squareSize, 2);
                    }
                    if (lines >= 2) {
                        rect(-6.3 * squareSize, (-3.8 + i) * squareSize, 0.25 * squareSize, 0.25 * squareSize, 2);
                    }
                    if (lines >= 3) {
                        rect(-6.65 * squareSize, (-3.45 + i) * squareSize, 0.25 * squareSize, 0.25 * squareSize, 2);
                    }
                    if (lines >= 4) {
                        rect(-6.3 * squareSize, (-3.45 + i) * squareSize, 0.25 * squareSize, 0.25 * squareSize, 2);
                    }
                }

                i += 1;
            }

            textStyle(BOLD);
            textSize(12 + 4 * count);
            if (sumLines <= 1) {
                fill(30, 50, 150);
            } else if (sumLines <= 2) {
                fill(140, 60, 10);
            } else if (sumLines <= 3) {
                fill(80, 30, 140);
            } else if (sumLines <= 4) {
                fill(30, 150, 130);
            } else if (sumLines <= 5) {
                fill(140, 130, 10);
            } else if (sumLines <= 6) {
                fill(30, 140, 20);
            } else if (sumLines <= 7) {
                fill(140, 30, 50);
            } else {
                let r = random(0, 1) < 0.5;
                let g = random(0, 1) < 0.5;
                let b = random(0, 1) < 0.5 && !r && !g;

                fill(r ? 250 : 50, g ? 250 : 50, b ? 250 : 50);
            }
            textAlign(RIGHT, BOTTOM);
            text(`x${count}`, -6 * squareSize, -5 * squareSize);

            textSize(16);
            textAlign(RIGHT, TOP);
            text(`${sumLines} ${sumLines === 1 ? "line" : "lines"}`, -6 * squareSize, -5 * squareSize);
        }
        textSize(16);
        textStyle(BOLD);
        textAlign(RIGHT, BOTTOM);
        noStroke();
        fill(0);
        text(`${board.lines} line${board.lines === 1 ? "" : "s"}`, -6 * squareSize, 8 * squareSize);
        text(`${board.juice} juice`, -6 * squareSize, 9 * squareSize);
        text(`Level ${Math.floor(getJuiceLevel(board.juice))} (x${1 + Math.floor(getJuiceLevel(board.juice)) * 0.2})`, -6 * squareSize, 10 * squareSize);

        console.log(game.gameData.match.rules);
        if (game.gameData.match.playing && game.gameData.match.rules.sprint > 0) {
            const sprint = game.gameData.match.rules.sprint;
            const myLines = game.localData.board.lines;
            const remaining = sprint - myLines;
            if (remaining > 0) {
                textSize(16);
                fill(0);
                textAlign(RIGHT, BOTTOM);
                text("remaining", -6 * squareSize, -0.1 * squareSize);
                textSize(32);
                textAlign(RIGHT, TOP);
                text(remaining.toLocaleString(), -6 * squareSize, 0);

                if (!game.gameData.match.solo && detail >= 5) {
                    let otherMax = 0;
                    for (const id of game.gameData.match.players.filter((id) => id !== game.playerData._id)) {
                        otherMax = Math.max(otherMax, game.gameData.match.boards[id].lines);
                    }

                    const ahead = myLines - otherMax;
                    textSize(16);
                    fill(sin(millis() / 200) * 100);
                    if (ahead < 0) {
                        text(`${-ahead} behind!`, -6 * squareSize, 2 * squareSize);
                    } else if (ahead > 0) {
                        text(`${ahead} ahead!`, -6 * squareSize, 2 * squareSize);
                    }
                }
            }
        }

        textSize(300);
        textStyle(BOLD);
        textAlign(CENTER, CENTER);
        noStroke();
        fill(0, 100);
        if (board.finishingMoves >= 0) {
            text(board.finishingMoves, 0, 0);
        }
    }
}

function getKeyName(k) {
    if (k === 37) {
        return "left";
    }
    if (k === 39) {
        return "right";
    }
    if (k === 40) {
        return "down";
    }
    if (k === 38) {
        return "up";
    }
    if (k === " ".charCodeAt(0)) {
        return "space";
    }
    return String.fromCharCode(k);
}

function drawState() {
    if (state.creatingNewAccount) {
        drawCreateAccount();
        return;
    }

    if (!socket.registered) {
        image(images.nathan, 0, 0, width, height);

        textSize(64);
        fill(255);
        text("Something went wrong!", 100, 100);

        return;
    }

    if (!game.inGame) {
        stroke(0);

        fill(100, 100, 250);
        beginShape();
        vertex(-100, 10);
        vertex(420 + 3000 * game.mainMenuAnim, 10);
        vertex(400 + 3000 * game.mainMenuAnim, 85);
        vertex(-100, 85);
        endShape();

        fill(250, 100, 120);
        beginShape();
        vertex(-100, 10);
        vertex(400 + 1000 * game.mainMenuAnim, 10);
        vertex(380 + 1000 * game.mainMenuAnim, 85);
        vertex(-100, 85);
        endShape();

        fill(250);
        beginShape();
        vertex(-100, 10);
        vertex(380 + 500 * game.mainMenuAnim, 10);
        vertex(360 + 500 * game.mainMenuAnim, 85);
        vertex(-100, 85);
        endShape();

        fill(0);
        noStroke();
        textSize(64);
        textStyle(BOLD);
        textAlign(LEFT, TOP);
        text("Chentris 2", 20 - 400 * game.mainMenuAnim, 20);

        push();

        translate(0, -600 * game.mainMenuAnim);

        fill(0);
        noStroke();

        textSize(16);
        textAlign(CENTER, TOP);
        textStyle(ITALIC);

        text(`online: ${game.online.total}`, width / 2, 10);
        text(`(playing: ${game.online.inMatch}, in lobby: ${game.online.inLobby}, in game: ${game.online.inGame} (${game.online.inSoloGame} solo), matches active: ${game.online.matches})`, width / 2, 30);

        fill(250);
        stroke(0);
        textStyle(BOLDITALIC);

        textSize(32);

        beginShape();
        vertex(width - 10, 15);
        vertex(width - 50 - textWidth(game.playerData.username), 15);
        vertex(width - 40 - textWidth(game.playerData.username), 70);
        vertex(width - 10, 70);
        endShape(CLOSE);

        noStroke();
        fill(0);

        textAlign(RIGHT, TOP);
        fill(...COSM_NAME_COLORS[game.playerData.currentNameColor || "Default"].data);
        text(game.playerData.username, width - 20, 20);

        textStyle(NORMAL);
        textSize(16);
        fill(200);
        text(`(#${game.playerData._id.substring(32)})`, width - 20, 50);

        stroke(0);
        fill(250);
        rect(width - 100, 80, 90, 95);
        rect(width - 200, 80, 90, 95);

        noStroke();
        fill(0);
        textStyle(BOLD);
        textAlign(CENTER, TOP);

        textSize(10);
        text("Normal", width - 155, 88);
        text("Competitive", width - 55, 88);

        textSize(16);
        text(game.playerData.normalElo + " (#" + game.normalRank + ")", width - 155, 100);
        text(game.playerData.compElo + " (#" + game.competitiveRank + ")", width - 55, 100);

        const normalRank = getRank(game.playerData.normalElo);
        const compRank = getRank(game.playerData.compElo);

        image(normalRank.icon, width - 170, 120);
        image(compRank.icon, width - 70, 120);

        textSize(12);
        textStyle(NORMAL);
        text(normalRank.name, width - 154, 156);
        text(compRank.name, width - 54, 156);

        stroke(0);
        fill(250);
        rect(width - 200, 185, 190, 60);
        rect(width - 200, 255, 190, 30);

        fill(0);
        noStroke();
        textStyle(BOLD);
        textAlign(LEFT, TOP);
        textSize(16);
        const level = floor(getLevel(game.playerData.xp));
        text(`Level ${level}`, width - 190, 190);

        const baseLevelXp = getXp(level);
        const nextLevelXp = getXp(level + 1);
        const deltaXp = nextLevelXp - baseLevelXp;
        const progress = game.playerData.xp - baseLevelXp;

        textSize(12);
        textStyle(NORMAL);
        text(`${progress.toLocaleString()} / ${deltaXp.toLocaleString()}`, width - 190, 205);

        textAlign(LEFT, TOP);
        text(baseLevelXp.toLocaleString(), width - 190, 230);

        textAlign(RIGHT, TOP);
        text(nextLevelXp.toLocaleString(), width - 20, 230);

        stroke(200);
        fill(250);
        rect(width - 190, 217, 170, 10);
        stroke(0);
        fill(50 + sqrt(progress / deltaXp) * 250, 50, 50 + sqrt(1 - progress / deltaXp) * 250);
        rect(width - 190, 217, 170 * (progress / deltaXp), 10);

        stroke(0);
        fill(50 + random(0, 50), 100 + random(0, 50), 200 + random(0, 50));
        rect(width - 30, 265, 10, 10);

        textAlign(RIGHT, CENTER);
        textSize(16);
        noStroke();
        fill(0);
        text(game.playerData.juice.toLocaleString(), width - 35, 271);

        pop();

        textAlign(LEFT, CENTER);
        textSize(24);
        textStyle(BOLD);

        for (let i = 0; i < game.menu.length; i++) {
            const menu = game.menu[i];
            const anim = 1000 * pow(2, i) * game.menuAnim;
            const backAnim = 2000 * pow(2, i) * game.menuAnim;

            stroke(0);
            fill(230);

            beginShape();
            vertex(-100, 100 + i * 50);
            vertex(310 - backAnim - i * 10 + game.menuButtonAnims[i] * 20, 100 + i * 50);
            vertex(300 - backAnim - i * 10 + game.menuButtonAnims[i] * 20, 140 + i * 50);
            vertex(-100, 140 + i * 50);
            endShape();

            fill(255);

            beginShape();
            vertex(-100, 100 + i * 50);
            vertex(300 - anim - i * 10 + game.menuButtonAnims[i] * 10, 100 + i * 50);
            vertex(290 - anim - i * 10 + game.menuButtonAnims[i] * 10, 140 + i * 50);
            vertex(-100, 140 + i * 50);
            endShape();

            noStroke();
            fill(0);

            text(menu.name, 20 - anim, 122 + i * 50);
        }

        if (state.joiningMatch) {
            stroke(0);
            fill(250);
            rect(width / 2 - 200, height / 2 - 50, 400, 100);
            fill(0);
            noStroke();
            textSize(16);
            textStyle(BOLD);
            textAlign(CENTER, TOP);
            text("Enter Join Code", width / 2, height / 2 - 40);

            textSize(32);
            for (let i = 0; i < 4; i++) {
                const x = (i - 1.5) * (380 / 9);
                rect(width / 2 - x - 10, height / 2 + 40, 20, 2);

                const char = game.typedString.charAt(i);

                if (char) {
                    text(char, width / 2 + x, height / 2);
                }
            }

            fill(250, 120, 100);
            drawButton(
                width / 2 + 160,
                height / 2 - 50,
                40,
                20,
                "x",
                () => fill(230, 100, 80),
                () => fill(220, 90, 70)
            );
        }

        if (state.inSubMenu) {
            stroke(0);
            fill(250);
            rect(width / 2 - 500, height / 2 - 300, 1000, 600);

            fill(250, 120, 100);
            drawButton(
                width / 2 + 460,
                height / 2 - 300,
                40,
                20,
                "x",
                () => fill(230, 100, 80),
                () => fill(220, 90, 70)
            );

            if (state.subMenu === submenus.Settings) {
                line(width / 2, height / 2 - 300, width / 2, height / 2 + 300);

                textSize(24);
                textStyle(BOLD);
                textAlign(LEFT, TOP);
                text("Settings", width / 2 - 490, height / 2 - 290);
                text("Controls", width / 2 + 10, height / 2 - 290);

                textStyle(NORMAL);
                textAlign(LEFT, TOP);
                textSize(16);
                text("Move Left", width / 2 + 10, height / 2 - 250);
                text("Move Right", width / 2 + 10, height / 2 - 220);
                text("Soft Drop", width / 2 + 10, height / 2 - 190);
                text("Hard Drop", width / 2 + 10, height / 2 - 160);
                text("Rotate Left", width / 2 + 10, height / 2 - 130);
                text("Rotate Right", width / 2 + 10, height / 2 - 100);
                text("Rotate 180", width / 2 + 10, height / 2 - 70);
                text("Hold", width / 2 + 10, height / 2 - 40);

                fill(250);
                drawButton(
                    width / 2 + 140,
                    height / 2 - 250,
                    100,
                    20,
                    getKeyName(settings["controls.left"]),
                    () => fill(230),
                    () => fill(210)
                );
                fill(250);
                drawButton(
                    width / 2 + 140,
                    height / 2 - 220,
                    100,
                    20,
                    getKeyName(settings["controls.right"]),
                    () => fill(230),
                    () => fill(210)
                );
                fill(250);
                drawButton(
                    width / 2 + 140,
                    height / 2 - 190,
                    100,
                    20,
                    getKeyName(settings["controls.down"]),
                    () => fill(230),
                    () => fill(210)
                );
                fill(250);
                drawButton(
                    width / 2 + 140,
                    height / 2 - 160,
                    100,
                    20,
                    getKeyName(settings["controls.drop"]),
                    () => fill(230),
                    () => fill(210)
                );
                fill(250);
                drawButton(
                    width / 2 + 140,
                    height / 2 - 130,
                    100,
                    20,
                    getKeyName(settings["controls.rotateLeft"]),
                    () => fill(230),
                    () => fill(210)
                );
                fill(250);
                drawButton(
                    width / 2 + 140,
                    height / 2 - 100,
                    100,
                    20,
                    getKeyName(settings["controls.rotateRight"]),
                    () => fill(230),
                    () => fill(210)
                );
                fill(250);
                drawButton(
                    width / 2 + 140,
                    height / 2 - 70,
                    100,
                    20,
                    getKeyName(settings["controls.rotate180"]),
                    () => fill(230),
                    () => fill(210)
                );
                fill(250);
                drawButton(
                    width / 2 + 140,
                    height / 2 - 40,
                    100,
                    20,
                    getKeyName(settings["controls.hold"]),
                    () => fill(230),
                    () => fill(210)
                );

                fill(250);
                drawButton(
                    width / 2 + 340,
                    height / 2 + 260,
                    150,
                    30,
                    "Reset Settings",
                    () => fill(230),
                    () => fill(210)
                );

                if (game.awaitingKeypress) {
                    fill(0);
                    textSize(16);
                    noStroke();
                    textAlign(LEFT, TOP);
                    textStyle(BOLD);
                    text("Press any key to set keybind. Press ESC to cancel.", width / 2 + 10, height / 2); // text for when you are setting a control
                }

                fill(0);
                noStroke();
                textAlign(CENTER, TOP);
                text("you can move this piece", width / 2 - 250, height / 2 - 250);
                drawPiece(width / 2 - 250 - SQUARE_SIZE * 1.5 + game.settingsPieceX * SQUARE_SIZE, height / 2 - 200, 0, SQUARE_SIZE, 4, game.playerData.currentPalette);

                fill(250);
                drawSelect(width / 2 - 245, height / 2 - 100, 100, 20, MOVE_SPEED_SETTINGS, () => settings["moveSpeed"]);
                drawSelect(width / 2 - 245, height / 2 - 50, 100, 20, MOVE_DELAY_FACTOR_SETTINGS, () => settings["moveDelayFactor"]);
                drawSelect(width / 2 - 245, height / 2, 100, 20, SCREEN_SHAKE_SETTINGS, () => settings["screenShakeFactor"]);

                textAlign(RIGHT, TOP);
                fill(0);
                noStroke();
                text("move sensitivity", width / 2 - 255, height / 2 - 100);
                text("move delay factor", width / 2 - 255, height / 2 - 50);
                text("screen shake", width / 2 - 255, height / 2);
            } else if (state.subMenu === submenus.Leaderboard) {
                textAlign(LEFT, TOP);
                textStyle(BOLD);
                textSize(16);
                noStroke();
                fill(0);
                text("TOP NORMAL", width / 2 - 470, height / 2 - 290);
                text("TOP COMPETITIVE", width / 2 - 270, height / 2 - 290);
                text("HIGHEST LEVEL", width / 2 - 70, height / 2 - 290);
                text("RICHEST", width / 2 + 130, height / 2 - 290);

                for (let i = 0; i < 25; i += 1) {
                    noStroke();
                    fill(0);
                    textAlign(RIGHT, TOP);
                    textStyle(BOLD);
                    text(`${i + 1}.`, width / 2 - 470, height / 2 - 270 + 20 * i);
                    text(`${i + 1}.`, width / 2 - 270, height / 2 - 270 + 20 * i);
                    text(`${i + 1}.`, width / 2 - 70, height / 2 - 270 + 20 * i);
                    text(`${i + 1}.`, width / 2 + 130, height / 2 - 270 + 20 * i);

                    textAlign(LEFT, TOP);
                    if (game.leaderboard.normal[i] && game.leaderboard.normal[i].id === game.playerData._id) {
                        textStyle(BOLD);
                    } else {
                        textStyle(NORMAL);
                    }
                    text(game.leaderboard.normal[i] ? game.leaderboard.normal[i].username : "-", width / 2 - 465, height / 2 - 270 + 20 * i);

                    if (game.leaderboard.competitive[i] && game.leaderboard.competitive[i].id === game.playerData._id) {
                        textStyle(BOLD);
                    } else {
                        textStyle(NORMAL);
                    }
                    text(game.leaderboard.competitive[i] ? game.leaderboard.competitive[i].username : "-", width / 2 - 265, height / 2 - 270 + 20 * i);

                    if (game.leaderboard.level[i] && game.leaderboard.level[i].id === game.playerData._id) {
                        textStyle(BOLD);
                    } else {
                        textStyle(NORMAL);
                    }
                    text(game.leaderboard.level[i] ? game.leaderboard.level[i].username : "-", width / 2 - 65, height / 2 - 270 + 20 * i);

                    if (game.leaderboard.juice[i] && game.leaderboard.juice[i].id === game.playerData._id) {
                        textStyle(BOLD);
                    } else {
                        textStyle(NORMAL);
                    }
                    text(game.leaderboard.juice[i] ? game.leaderboard.juice[i].username : "-", width / 2 + 135, height / 2 - 270 + 20 * i);

                    textStyle(ITALIC);
                    textAlign(RIGHT, TOP);
                    text(game.leaderboard.normal[i] ? game.leaderboard.normal[i].elo : "-", width / 2 - 320, height / 2 - 270 + 20 * i);
                    text(game.leaderboard.competitive[i] ? game.leaderboard.competitive[i].elo : "-", width / 2 - 120, height / 2 - 270 + 20 * i);
                    text(game.leaderboard.level[i] ? getLevel(game.leaderboard.level[i].xp) : "-", width / 2 + 100, height / 2 - 270 + 20 * i);
                    text(game.leaderboard.juice[i] ? game.leaderboard.juice[i].juice.toLocaleString() : "-", width / 2 + 360, height / 2 - 270 + 20 * i);

                    noFill();
                    stroke(0);

                    image(getRank(game.leaderboard.normal[i] ? game.leaderboard.normal[i].elo : 0).icon, width / 2 - 315, height / 2 - 263 + 20 * i - 8, 16, 16);
                    image(getRank(game.leaderboard.competitive[i] ? game.leaderboard.competitive[i].elo : 0).icon, width / 2 - 115, height / 2 - 263 + 20 * i - 8, 16, 16);

                    rect(width / 2 - 315, height / 2 - 263 + 20 * i - 8, 16, 16);
                    rect(width / 2 - 115, height / 2 - 263 + 20 * i - 8, 16, 16);
                }

                noStroke();
                fill(0);

                textAlign(RIGHT, TOP);
                textSize(16);
                let prevElo = 0;
                for (let i = 0; i < RANKS.length; i++) {
                    let rank = RANKS[i];
                    image(rank.icon, width / 2 + 460, height / 2 + 300 - 40 - 40 * i);
                    textStyle(BOLD);
                    text(rank.name, width / 2 + 455, height / 2 + 300 - 40 - 40 * i);
                    textStyle(NORMAL);
                    if (rank.elo < 1000000000) {
                        text(prevElo + " - " + (rank.elo - 1), width / 2 + 455, height / 2 + 300 - 20 - 40 * i);
                    } else {
                        text(prevElo + "+", width / 2 + 455, height / 2 + 300 - 20 - 40 * i);
                    }
                    prevElo = rank.elo;
                }
            } else if (state.subMenu === submenus.Cosmetics) {
                fill(250);
                drawButton(
                    width / 2 - 490,
                    height / 2 - 290,
                    100,
                    30,
                    "Palettes",
                    () => fill(230),
                    () => fill(210)
                );
                fill(250);
                drawButton(
                    width / 2 - 380,
                    height / 2 - 290,
                    100,
                    30,
                    "Banners",
                    () => fill(230),
                    () => fill(210)
                );
                fill(250);
                drawButton(
                    width / 2 - 270,
                    height / 2 - 290,
                    100,
                    30,
                    "Name Colors",
                    () => fill(230),
                    () => fill(210)
                );

                let i = 0;
                if (game.cosmeticsPage === "palette") {
                    for (const paletteName in COSM_PALETTES) {
                        const x = width / 2 - 490 + floor(i / 6) * 310;
                        const y = height / 2 - 240 + (i % 6) * 80;
                        textAlign(LEFT, TOP);
                        textStyle(BOLD);
                        fill(0);
                        noStroke();
                        text(paletteName, x, y);

                        let wSum = 0;
                        for (let j = 0; j < 8; j += 1) {
                            drawPiece(x + 5 + wSum * 10, y + 20, 0, 10, j, paletteName);
                            wSum += PIECES[j].width + 1;
                        }

                        if ((game.playerData.palettesUnlocked || ["Default"]).includes(paletteName)) {
                            if (game.playerData.currentPalette === paletteName) {
                                fill(200, 200, 250);
                                drawButton(
                                    x,
                                    y + 50,
                                    300,
                                    20,
                                    "equipped",
                                    () => fill(230),
                                    () => fill(210),
                                    true
                                );
                            } else {
                                fill(250);
                                drawButton(
                                    x,
                                    y + 50,
                                    300,
                                    20,
                                    "equip",
                                    () => fill(230),
                                    () => fill(210),
                                    false
                                );
                            }
                        } else {
                            const data = COSM_PALETTES[paletteName];
                            if (getLevel(game.playerData.xp) < data.levelRequirement) {
                                drawButton(
                                    x,
                                    y + 50,
                                    300,
                                    20,
                                    `unlocks at level ${data.levelRequirement}`,
                                    () => fill(230),
                                    () => fill(210),
                                    true
                                );
                            } else if (game.playerData.juice < data.juiceCost) {
                                fill(250, 200, 200);
                                drawButton(
                                    x,
                                    y + 50,
                                    300,
                                    20,
                                    `purchase - ${data.juiceCost.toLocaleString()}`,
                                    () => fill(230, 200, 200),
                                    () => fill(210),
                                    false
                                );
                            } else {
                                fill(250);
                                drawButton(
                                    x,
                                    y + 50,
                                    300,
                                    20,
                                    `purchase - ${data.juiceCost}`,
                                    () => fill(230),
                                    () => fill(210),
                                    false
                                );
                            }
                        }

                        i += 1;
                    }
                } else if (game.cosmeticsPage === "banner") {
                    for (const bannerName in COSM_BANNERS) {
                        const x = width / 2 - 490 + floor(i / 6) * 310;
                        const y = height / 2 - 240 + (i % 6) * 80;
                        textAlign(LEFT, TOP);
                        textStyle(BOLD);
                        fill(0);
                        noStroke();
                        text(bannerName, x, y);

                        image(images.banners[bannerName], x, y + 15, 200, 40);
                        stroke(0);
                        noFill();
                        rect(x, y + 15, 200, 40);
                        noStroke();

                        if ((game.playerData.bannersUnlocked || ["Default"]).includes(bannerName)) {
                            if (game.playerData.currentBanner === bannerName) {
                                fill(200, 200, 250);
                                drawButton(
                                    x,
                                    y + 50,
                                    300,
                                    20,
                                    "equipped",
                                    () => fill(230),
                                    () => fill(210),
                                    true
                                );
                            } else {
                                fill(250);
                                drawButton(
                                    x,
                                    y + 50,
                                    300,
                                    20,
                                    "equip",
                                    () => fill(230),
                                    () => fill(210),
                                    false
                                );
                            }
                        } else {
                            const data = COSM_BANNERS[bannerName];
                            if (getLevel(game.playerData.xp) < data.levelRequirement) {
                                drawButton(
                                    x,
                                    y + 50,
                                    300,
                                    20,
                                    `unlocks at level ${data.levelRequirement}`,
                                    () => fill(230),
                                    () => fill(210),
                                    true
                                );
                            } else if (game.playerData.juice < data.juiceCost) {
                                fill(250, 200, 200);
                                drawButton(
                                    x,
                                    y + 50,
                                    300,
                                    20,
                                    `purchase - ${data.juiceCost.toLocaleString()}`,
                                    () => fill(230, 200, 200),
                                    () => fill(210),
                                    false
                                );
                            } else {
                                fill(250);
                                drawButton(
                                    x,
                                    y + 50,
                                    300,
                                    20,
                                    `purchase - ${data.juiceCost}`,
                                    () => fill(230),
                                    () => fill(210),
                                    false
                                );
                            }
                        }

                        i += 1;
                    }
                } else if (game.cosmeticsPage === "nameColor") {
                    for (const nameColor in COSM_NAME_COLORS) {
                        const x = width / 2 - 490 + floor(i / 6) * 310;
                        const y = height / 2 - 240 + (i % 6) * 80;
                        textAlign(LEFT, TOP);
                        textStyle(BOLD);
                        fill(0);
                        noStroke();
                        text(nameColor, x, y);

                        const data = COSM_NAME_COLORS[nameColor];
                        console.log(data.data);
                        fill(...data.data);
                        text(game.playerData.username, x, y + 30);

                        if ((game.playerData.nameColorsUnlocked || ["Default"]).includes(nameColor)) {
                            if (game.playerData.currentNameColor === nameColor) {
                                fill(200, 200, 250);
                                drawButton(
                                    x,
                                    y + 50,
                                    300,
                                    20,
                                    "equipped",
                                    () => fill(230),
                                    () => fill(210),
                                    true
                                );
                            } else {
                                fill(250);
                                drawButton(
                                    x,
                                    y + 50,
                                    300,
                                    20,
                                    "equip",
                                    () => fill(230),
                                    () => fill(210),
                                    false
                                );
                            }
                        } else {
                            if (getLevel(game.playerData.xp) < data.levelRequirement) {
                                drawButton(
                                    x,
                                    y + 50,
                                    300,
                                    20,
                                    `unlocks at level ${data.levelRequirement}`,
                                    () => fill(230),
                                    () => fill(210),
                                    true
                                );
                            } else if (game.playerData.juice < data.juiceCost) {
                                fill(250, 200, 200);
                                drawButton(
                                    x,
                                    y + 50,
                                    300,
                                    20,
                                    `purchase - ${data.juiceCost.toLocaleString()}`,
                                    () => fill(230, 200, 200),
                                    () => fill(210),
                                    false
                                );
                            } else {
                                fill(250);
                                drawButton(
                                    x,
                                    y + 50,
                                    300,
                                    20,
                                    `purchase - ${data.juiceCost}`,
                                    () => fill(230),
                                    () => fill(210),
                                    false
                                );
                            }
                        }

                        i += 1;
                    }
                }
            }
        }

        textAlign(LEFT, TOP);
        textSize(16);
        textStyle(BOLD);
        text("Update 3", 20 - 400 * game.mainMenuAnim, height - 200);
        textStyle(NORMAL);
        fill(0);
        text("- Added sensitivity control", 20 - 400 * game.mainMenuAnim, height - 180);
        text("- Added screen shake setting", 20 - 400 * game.mainMenuAnim, height - 160);
        text("- New leaderboards for level and juice", 20 - 400 * game.mainMenuAnim, height - 140);
        text("- Cosmetics available", 20 - 400 * game.mainMenuAnim, height - 120);

        return;
    }

    // In game
    if (game.gameData.match.over && game.gameData.match.matchOverDelay >= 20) {
        fill(0);
        noStroke();
        textStyle(BOLD);
        textAlign(LEFT, TOP);
        textSize(32);
        text("Match Results", 20, 20);
        textSize(24);
        const winner = game.gameData.match.data[game.gameData.match.results.winner];
        text("Winner: " + (winner ? winner.username : "Nobody"), 20, 60);
        text(`Returning to lobby in ${floor((200 - game.gameData.match.matchOverDelay) / 20)}...`, 20, height - 50);

        const rewards = game.gameData.match.results.rewards[game.playerData._id];
        const anim = clamp(game.gameData.match.matchOverDelay - 20, 0, 80) / 80;

        const animXp = floor(game.playerData.xp + anim * rewards.xp);
        const animElo = floor((game.gameData.match.rules.competitive ? game.playerData.compElo : game.playerData.normalElo) + anim * rewards.elo);
        const animJuice = floor(game.playerData.juice + anim * rewards.juice);

        text(`XP: +${floor(anim * rewards.xp)}`, 20, height - 200);
        text(`JUICE: +${floor(anim * rewards.juice)}`, 20, height - 170);
        text(`ELO: ${rewards.elo > 0 ? "+" : ""}${round(anim * rewards.elo)}`, 20, height - 140);

        fill(0);
        textAlign(LEFT, BOTTOM);
        textSize(24);
        const level = floor(getLevel(animXp));
        text(`Level ${level}`, 40, 200);

        const baseLevelXp = getXp(level);
        const nextLevelXp = getXp(level + 1);
        const deltaXp = nextLevelXp - baseLevelXp;
        const progress = animXp - baseLevelXp;

        fill(0);
        textSize(20);
        textStyle(NORMAL);
        text(`${progress.toLocaleString()} / ${deltaXp.toLocaleString()}`, 40, 220);

        textAlign(LEFT, TOP);
        text(baseLevelXp.toLocaleString(), 40, 245);

        textAlign(RIGHT, TOP);
        text(nextLevelXp.toLocaleString(), width - 40, 245);

        stroke(200);
        fill(250);
        rect(40, 220, width - 80, 20);
        stroke(0);
        fill(50 + sqrt(progress / deltaXp) * 250, 50, 50 + sqrt(1 - progress / deltaXp) * 250);
        rect(40, 220, (width - 80) * (progress / deltaXp), 20);

        fill(50 + random(0, 50), 100 + random(0, 50), 200 + random(0, 50));
        rect(300, 310, 20, 20);

        noStroke();

        fill(0);
        textAlign(RIGHT, CENTER);
        textSize(24);
        text(animJuice.toLocaleString(), 290, 320);

        const rank = getRank(animElo);
        text(animElo, 590, 320);

        image(rank.icon, 600, 300, 40, 40);
        textSize(16);
        text(rank.name, 590, 340);

        return;
    }

    push();

    let deadAnimX = 0;
    let deadAnimY = 0;

    if (!game.localData.board) {
        return;
    }

    if (game.localData.board.lost) {
        const anim = game.localData.deadAnim * 50;
        deadAnimY = anim ** 2 - 20 * anim;
        deadAnimX = -(anim * log(anim + 1));
    }

    translate(game.boardOrigin[0] + deadAnimX, game.boardOrigin[1] + deadAnimY);
    rotate(game.boardRotation + deadAnimX * 0.002);
    scale(game.boardScale);
    translate(game.boardTranslation[0], game.boardTranslation[1]);

    drawBoard(game.localData.board, game.localData.state, game.localData.timers, SQUARE_SIZE, 5, game.playerData.currentPalette);

    if (!game.gameData.match.playing) {
        textStyle(BOLD);
        textSize(32);
        textAlign(CENTER, CENTER);
        fill(0, 100);
        noStroke();
        text("Practice", 0, 0);
    } else {
        textSize(16);
        textAlign(CENTER, TOP);
        textStyle(BOLD);
        fill(0);
        noStroke();

        const end = game.gameData.match.ended || Date.now();
        const elapsed = max(end - game.gameData.match.started, 0);
        const time = `${nf(floor(elapsed / 60_000), 2, 0)}:${nf(floor(elapsed / 1000) % 60, 2, 0)}:${nf(elapsed % 1000, 3, 0)}`;
        const pps = `${nf(game.localData.board.move ? game.localData.board.move / (max(elapsed, 1) / 1000) : 0, 0, 2)} pps`;
        
        if (game.gameData.match.solo) {
            const kos = `${game.gameData.match.kills[game.playerData._id]} KO${game.gameData.match.kills[game.playerData._id] === 1 ? "" : "s"}`;
            text(`${time} - ${pps} - ${kos}`, 0, 10.5 * SQUARE_SIZE);
        } else {
            text(`${time} - ${pps}`, 0, 10.5 * SQUARE_SIZE);
        }
    }

    pop();

    textStyle(BOLD);
    textAlign(CENTER, CENTER);
    noStroke();

    for (let notif of game.boardNotifications) {
        textSize(16 + sqrt(notif.time) * 100);
        fill(0, 300 * (1 - notif.time));
        text(notif.text, game.boardOrigin[0], game.boardOrigin[1]);
    }

    if (!game.gameData.match.playing) {
        push();

        translate(-game.matchAnim * 400, 0);

        fill(250);
        stroke(0);
        rect(10, 30, 200, 250);
        rect(10, 310, 200, 250);

        fill(0);
        noStroke();
        textSize(16);

        textStyle(BOLD);

        textAlign(CENTER, BOTTOM);
        text("Match", 110, 25);
        text("Rules", 110, 304);

        textAlign(LEFT, TOP);
        text("Code", 20, 40);

        textSize(32);
        for (let i = 0; i < 4; i++) {
            text(game.gameData.match.joinCode[i], 20 + i * 20, 60);
        }

        stroke(0);
        fill(120, 100, 250);
        drawButton(
            20,
            95,
            180,
            30,
            "Copy Link",
            () => fill(100, 80, 230),
            () => {},
            !game.gameData.match.options.allowJoining
        );

        fill(250, 120, 100);
        drawButton(
            20,
            130,
            180,
            30,
            "Leave Match",
            () => fill(230, 100, 80),
            () => {}
        );

        textAlign(LEFT, TOP);
        fill(0);
        text("Allow joining", 20, 200);
        text("Public", 20, 225);
        text("Ranked", 20, 250);

        function getOption(name) {
            return game.gameData.match.options[name];
        }

        function getRule(name) {
            return game.gameData.match.rules[name];
        }

        drawSelect(150, 200, 50, 20, ON_OR_OFF, () => getOption("allowJoining"), false);
        drawSelect(150, 225, 50, 20, ON_OR_OFF, () => getOption("public"), false);
        drawSelect(150, 250, 50, 20, ON_OR_OFF, () => getOption("ranked"), false);

        textAlign(LEFT, TOP);
        textSize(16);
        text("Competitive", 20, 325);
        text("Initial Speed", 20, 350);
        text("Resend Garbage", 20, 375);
        text("Forgiving Combos", 20, 400);
        text("Garbage Turns", 20, 425);
        text("Garbage Defense", 20, 450);
        text("Combo Not Incoming", 20, 475);
        text("Sprint", 20, 500);

        drawSelect(150, 325, 50, 20, ON_OR_OFF, () => getRule("competitive"), false);
        drawSelect(
            150,
            350,
            50,
            20,
            [
                { key: "slow", value: 80 },
                { key: "medium", value: 320 },
                { key: "fast", value: 640 },
                { key: "very fast", value: 1280 },
                { key: "good luck", value: 5120 },
                { key: "why", value: 40960 },
                { key: "snail", value: 20 },
            ],
            () => getRule("initialSpeed"),
            getRule("competitive")
        );
        drawSelect(150, 375, 50, 20, ON_OR_OFF, () => getRule("resendGarbage"), getRule("competitive"));
        drawSelect(150, 400, 50, 20, ON_OR_OFF, () => getRule("forgivingCombos"), getRule("competitive"));
        drawSelect(
            150,
            425,
            50,
            20,
            [
                { key: "one", value: 1 },
                { key: "two", value: 2 },
                { key: "three", value: 3 },
            ],
            () => getRule("garbageTurns"),
            getRule("competitive")
        );
        drawSelect(150, 450, 50, 20, ON_OR_OFF, () => getRule("garbageDefense"), getRule("competitive"));
        drawSelect(150, 475, 50, 20, ON_OR_OFF, () => getRule("comboIgnoresIncoming"), getRule("competitive"));
        drawSelect(
            150,
            500,
            50,
            20,
            [
                { key: "off", value: 0 },
                { key: "20 lines", value: 20 },
                { key: "40 lines", value: 40 },
                { key: "100 lines", value: 100 },
                { key: "1000 lines", value: 1000 },
                { key: "1000000 lines", value: 1_000_000 },
            ],
            () => getRule("sprint"),
            getRule("competitive")
        );

        pop();

        for (let i = 0; i < game.gameData.match.players.length; i++) {
            const id = game.gameData.match.players[i];
            const userData = game.gameData.match.data[id];

            if (!userData) {
                continue;
            }

            const y = i * 45;

            fill(250);
            noStroke();
            rect(width - 210, 10 + y, 200, 40);
            image(images.banners[userData.currentBanner], width - 210, 10 + y, 200, 40);
            stroke(0);
            noFill();
            rect(width - 210, 10 + y, 200, 40);
            fill(250);
            rect(width - 45, 15 + y, 30, 30);

            fill(...COSM_NAME_COLORS[userData.currentNameColor || "Default"].data);
            noStroke();
            textAlign(RIGHT, TOP);
            textStyle(BOLD);
            textSize(16);
            text(userData.username, width - 50, 15 + y);

            const elo = game.gameData.match.rules.competitive ? userData.compElo : userData.normalElo;
            const rank = getRank(elo);

            textStyle(NORMAL);
            text(elo, width - 70, 33 + y);

            textStyle(BOLDITALIC);
            textSize(16);
            textAlign(CENTER, CENTER);
            text(getLevel(userData.xp), width - 30, 31 + y);

            image(rank.icon, width - 65, 32 + y, 14, 14);

            stroke(0);
            noFill();
            rect(width - 65, 32 + y, 14, 14);

            if (userData._id === game.playerData._id) {
                fill(250);
                triangle(width - 250, 20 + y, width - 250, 40 + y, width - 230, 30 + y);
            }

            if (userData._id === game.gameData.match.leader) {
                fill(220, 160, 100);

                beginShape();
                vertex(width - 200, 20 + y);
                vertex(width - 195, 30 + y);
                vertex(width - 190, 20 + y);
                vertex(width - 185, 30 + y);
                vertex(width - 180, 20 + y);
                vertex(width - 180, 40 + y);
                vertex(width - 200, 40 + y);
                endShape(CLOSE);
            }

            if (game.gameData.match.ready[id]) {
                fill(100, 250, 120);
            } else {
                fill(250, 120, 100);
            }

            rect(width - 220, 10 + y, 10, 40);
        }

        if (game.localData.ready) {
            fill(100, 250, 120);
        } else {
            fill(250, 120, 100);
        }

        textSize(12);
        textAlign(RIGHT, CENTER);
        textStyle(BOLD);
        noStroke();
        text(`You are ${game.localData.ready ? "READY" : "NOT READY (PRESS ENTER)"}.`, width - 220, height / 2);
    } else {
        fill(0);
        textAlign(LEFT, TOP);
        textSize(16);
        textStyle(BOLD);

        const players = game.gameData.match.players.filter((id) => id !== game.playerData._id);
        const alivePlayers = game.gameData.match.players.filter((id) => !game.gameData.match.boards[id].lost);

        for (let id of players) {
            const pos = game.localData.boardAnims[id];

            if (pos[2] > 5) {
                continue;
            }

            push();
            translate(pos[0], pos[1]);
            rotate(-(pos[2] * 50 * log(pos[2] * 50 + 1)) * 0.002);

            drawBoard(
                game.gameData.match.boards[id],
                game.gameData.match.states[id].state || defaultSubmoveState(),
                game.gameData.match.states[id].timers || {
                    fall: 0,
                    dropping: false,
                    shortDrop: 0,
                    longDrop: 0,
                },
                game.localData.boardSizes[id],
                alivePlayers.length >= 25 ? 0 : alivePlayers.length >= 17 ? 1 : alivePlayers.length >= 10 ? 2 : alivePlayers.length >= 5 ? 3 : alivePlayers.length <= 2 ? 4 : 3,
                game.gameData.match.data[id].currentPalette
            );

            noStroke();
            textSize(16);
            textAlign(CENTER, BOTTOM);
            textStyle(BOLD);
            fill(...COSM_NAME_COLORS[game.gameData.match.data[id].currentNameColor || "Default"].data);
            text(`${game.gameData.match.data[id].username} (${game.gameData.match.kills[id]} KO${game.gameData.match.kills[id] === 1 ? "" : "s"})`, 0, -11 * game.localData.boardSizes[id]);

            pop();
        }

        if (alivePlayers.length > 2) {
            for (let i = 0; i < 5; i += 1) {
                stroke(0);
                fill(game.localData.attackOption === i ? 0 : 250);
                rect(width / 2 - 250 + i * 100, height - 35, 95, 20);
                rect(width / 2 - 250 + i * 100, height - 40, 30, 30);

                noStroke();
                fill(game.localData.attackOption === i ? 250 : 0);
                textAlign(CENTER, CENTER);
                textStyle(BOLD);
                text(i + 1, width / 2 - 235 + i * 100, height - 25);

                textStyle(NORMAL);
                textAlign(LEFT, CENTER);
                if (i === 0) {
                    text("random", width / 2 - 216 + i * 100, height - 24);
                } else if (i === 1) {
                    text("kills", width / 2 - 216 + i * 100, height - 24);
                } else if (i === 2) {
                    text("revenge", width / 2 - 216 + i * 100, height - 24);
                } else if (i === 3) {
                    text("winners", width / 2 - 216 + i * 100, height - 24);
                } else if (i === 4) {
                    text("losers", width / 2 - 216 + i * 100, height - 24);
                }
            }
        }

        if (game.localData.board.lost) {
            textSize(32);
            textStyle(BOLD);
            textAlign(CENTER, CENTER);
            fill(0);
            noStroke();
            if (game.gameData.match.results.winner === game.playerData._id) {
                text("You win!", game.boardOrigin[0], game.boardOrigin[1]);
            } else {
                text("You are eliminated!", game.boardOrigin[0], game.boardOrigin[1]);
            }
        }
    }
}

function draw() {
    update();
    updateInput();
    if (game.loading) {
        drawLoading();
        drawError();
        return;
    }
    background(250);
    drawState();
    drawError();
}
