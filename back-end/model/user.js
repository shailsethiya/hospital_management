const mongoose = require('mongoose');

const Schema = mongoose.Schema

const userSchema = new Schema({
    // _id: { type: mongoose.Types.ObjectId },
    firstName: String,
    lastName: String,
    email: String,
    mobileNumber: Number,
    role: String,
    password: String,
    isVerified: String,
    status: String
});

module.exports = mongoose.model('User', userSchema, 'users');