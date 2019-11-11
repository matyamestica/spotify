'use strict'

var mongoose = require('mongoose');
var Schema = mongoose.Schema;
//objeto artista
var ArtistSchema = Schema({
    name: String,
    description: String,
    image: String
})

//exportar objeto artista con el esquema de artista
module.exports = mongoose.model('Artist',ArtistSchema);