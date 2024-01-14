import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    username: {
        type: 'string',
        required: true,
        trim: true,
        min: 3,
        max:30
    },
    email: {
        type: 'string',
        required: true,
        unique: true,
        trim: true
    },
    mobileNumber: {
        type: 'string',
        required: true,
        unique: true,
        trim: true,
        min: 10,
        max: 10
    },
    password: {
        type: 'string',
        required: true,
        trim: true
    }
});

const user = mongoose.model('user', userSchema);

export default user;