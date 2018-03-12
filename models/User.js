var mongoose = require('mongoose');

var UserSchema = new mongoose.Schema({
    name: String,
    address: String,
    password: String,
    wallet:Number
});

module.exports = mongoose.model('User', UserSchema);