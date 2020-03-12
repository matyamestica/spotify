'use strict'

var express = require('express');
var AlbumController = require('../controllers/album');

var multipart = require('connect-multiparty');
var md_upload = multipart({uploadDir: './uploads/albums'});


//aqui sea crea rutas para el api
var api = express.Router();
var md_auth = require('../middlewares/authenticated');

api.get('/album',md_auth.ensureAuth,AlbumController.getAlbum);


module.exports = api;