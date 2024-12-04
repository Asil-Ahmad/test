
const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
    password: {
        type: String,
        required: true,
        timstamps: true,
    },
    profilepic: {
        type: String,
    },
    role:{
        type: String,
    },

    
});

const userModel = mongoose.model('userModel', UserSchema);

module.exports = userModel;
