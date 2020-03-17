'use strict'

var mongoose = require('mongoose');
var Schema = mongoose.Schema;
//objeto album
var AlbumSchema = Schema({
    title: String,
    description: String,
    year: Number,
    image: String,
    artist:{type: Schema.ObjectId, ref: 'Artist'}
})

//exportar objeto album con el esquema de album
module.exports = mongoose.model('Album',AlbumSchema);