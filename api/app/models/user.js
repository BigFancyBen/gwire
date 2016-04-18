// get an instance of mongoose and mongoose.Schema
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

// set up a mongoose model and pass it using module.exports
module.exports = mongoose.model('User', new Schema({
    firstname: String,
    lastname: String,
    username: String,
    password: String,
    admin: Boolean,
    email: String,
    deleted: Boolean,
    //banned
    //resetkey
    //resetexpire
}));
