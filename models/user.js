'use strict'

var mongoose = require('mongoose');
var Schema = mongoose.Schema;
//objeto usuario
var UserSchema = Schema({
    name: String,
    surname: String,
    email: String,
    password: String,
    role: String,
    image: String,
    song: String,
    segundo: String
})

//exportar objeto usuario con el esquema de usuario
module.exports = mongoose.model('User',UserSchema);