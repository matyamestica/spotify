'use strict'

var mongoose = require('mongoose');
var Schema = mongoose.Schema;
//objeto cancion
var SongSchema = Schema({
    number: Number,
    name: String,
    duration: String,
    file: String,
    album :{type: Schema.ObjectId, ref: 'Album'}
})

//exportar cancion album con el esquema de cancion
module.exports = mongoose.model('Song',SongSchema);