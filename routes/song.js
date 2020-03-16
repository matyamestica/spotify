'use strict'

var express = require('express');
var SongController = require('../controllers/song');

var multipart = require('connect-multiparty');
var md_upload = multipart({uploadDir: './uploads/songs'});


//aqui sea crea rutas para el api
var api = express.Router();
var md_auth = require('../middlewares/authenticated');

api.get('/song',md_auth.ensureAuth, SongController.getSong);



module.exports = api;