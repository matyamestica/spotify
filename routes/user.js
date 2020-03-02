'use strict'

var express = require('express');
var UserController = require('../controllers/user');

//aqui sea crea rutas para el api
var api = express.Router();

api.get('/probando-controlador',UserController.pruebas);

module.exports = api;