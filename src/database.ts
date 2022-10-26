const MONGO_URI = `mongodb+srv://admin:${process.env.MONGO_PASSWORD}@hked.mwinf.mongodb.net/chentris?retryWrites=true&w=majority`;
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

export default {
    connect,
    newUser,
    findUser,
}