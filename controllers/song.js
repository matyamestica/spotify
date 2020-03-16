'use strict'

var path = require('path');
var fs = require('fs');
var mongoosePaginate = require('mongoose-pagination');

var Artist = require('../models/artist');
var Album = require('../models/album');
var Song = require('../models/song');

function getSong(req, res){
    var songId = req.params.id;

    Song.findById(songId).populate({path: 'album'}).exec((err, song) => {
        if(err){
            res.status(500).send({message: 'Error en la petición'});
        }else{
            if(!song){
                res.status(404).send({message: 'La canción no existe'});
            }else{
                res.status(200).send({song});
            }
        }
    });
}

function getSongs(req, res){
    var albumId = req.params.album;

    if(!albumId){
        var find = Song.find({}).sort('number');
    }else{
        var find = Song.find({album: albumId}).sort('number');
    }

    find.populate({
        path: 'album',
        populate: {
            path: 'artist',
            model: 'Artist'
        }
    }).exec(function(err, songs){
        if(err){
            res.status(500).send({message: 'Error en la petición'});
        }else{
            if(!songs){
                res.status(404).send({message: 'No hay canciones'});
            }else{
                res.status(200).send({songs});
            }

        }
    });
}

function saveSong(req, res){
    var song = new Song();

    var params = req.body;
    song.number = params.number;
    song.name = params.name;
    song.duration = params.duration;
    song.file = null;
    song.album = params.album;

    song.save((err, songStored) => {
        if(err){
            res.status(500).send({message: 'Error en el servidor'});
        }else{
            if(!songStored){
                res.status(404).send({message: 'No se ha guardado la canción'});
            }else{
                res.status(200).send({song: songStored});
            }
        }
    });
}

module.exports = {
    getSong,
    getSongs,
    saveSong
};