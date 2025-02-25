const DEV = process.env.DEV === '1';

const MONGO_URI = `mongodb+srv://admin:${process.env.MONGO_PASSWORD}@hked.mwinf.mongodb.net/${DEV ? 'chentrisDev' : 'chentris'}?retryWrites=true&w=majority`;
import mongoose from 'mongoose';

import User from './schemas/user.schema';
import { v4 as uuidv4 } from 'uuid';

async function connect() {
    await mongoose.connect(MONGO_URI);
    console.log('Connected to database.');
}

async function newUser(username: string) {
    const user = new User({
        _id: uuidv4(),
        secret: uuidv4() + uuidv4() + uuidv4() + uuidv4(),
        username,
        xp: 0,
        juice: 0,
        normalElo: 1000,
        compElo: 1000,
    });
    await user.save();
    return user;
}

async function findUser(filter: object) {
    return await User.findOne(filter).exec();
}

async function getLeaderboard(competitive: boolean) {
    return (await User.find({ [competitive ? 'compElo' : 'normalElo']: { $gt: 1000 } }).sort({ [competitive ? 'compElo' : 'normalElo']: -1 }).limit(25).exec()).map(user => ({ id: user._id, username: user.username, elo: user[competitive ? 'compElo' : 'normalElo'] }));
}

async function getLevelLeaderboard() {
    return (await User.find({ xp: { $gt: 0 } }).sort({ xp: -1 }).limit(25).exec()).map(user => ({ id: user._id, username: user.username, xp: user.xp }));
}

async function getJuiceLeaderboard() {
    return (await User.find({ juice: { $gt: 0 } }).sort({ juice: -1 }).limit(25).exec()).map(user => ({ id: user._id, username: user.username, juice: user.juice }));
}

async function getRank(user: string, competitive: boolean) {
    return await User.find({ [competitive ? 'compElo' : 'normalElo']: { $gt: (await findUser({ _id: user }))[competitive ? 'compElo' : 'normalElo'] } }).countDocuments().exec() + 1;
}

export default {
    connect,
    newUser,
    findUser,
    getLeaderboard,
    getLevelLeaderboard,
    getJuiceLeaderboard,
    getRank,
}