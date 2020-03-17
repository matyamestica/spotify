'use strict'

var express = require('express');
var UserController = require('../controllers/user');

var multipart = require('connect-multiparty');
var md_upload = multipart({uploadDir: './uploads/users'});


//aqui sea crea rutas para el api
var api = express.Router();
var md_auth = require('../middlewares/authenticated');

api.get('/probando-controlador',md_auth.ensureAuth,UserController.pruebas);
api.post('/register',UserController.saveUser);
api.post('/login',UserController.loginUser);
api.put('/update-user/:id', md_auth.ensureAuth, UserController.updatedUser);
api.post('/upload-image-user/:id',[md_auth.ensureAuth, md_upload], UserController.uploadImage);
api.get('/get-image-user/:imageFile', UserController.getImageFile);

module.exports = api;