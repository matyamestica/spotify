'use strict'

var express = require('express');
var UserController = require('../controllers/user');

//aqui sea crea rutas para el api
var api = express.Router();
var md_auth = require('../middlewares/authenticated');

api.get('/probando-controlador',md_auth.ensureAuth,UserController.pruebas);
api.post('/register',UserController.saveUser);
api.post('/login',UserController.loginUser);
api.put('/update-user/:id', md_auth.ensureAuth, UserController.updatedUser);

module.exports = api;