import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
    _id: {type: String, required: true, default: '00000000-0000-0000-0000-000000000000'},
    secret: {type: String, required: true, default: '00000000-0000-0000-0000-000000000000'},
    username: {type: String, required: true},
    xp: {type: Number, default: 0},
    juice: {type: Number, default: 0},
    normalElo: {type: Number, default: 0},
    compElo: {type: Number, default: 0},
});

const User = mongoose.model('user', userSchema);

export default User;