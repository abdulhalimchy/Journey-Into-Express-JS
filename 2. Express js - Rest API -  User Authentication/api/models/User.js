const  mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
    email:{
        type: String,
        trim: true,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true,
        minlength: 4
    }
});

const User = mongoose.model('User', userSchema);

module.exports = User;