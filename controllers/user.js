'use strict'

var bcrypt = require('bcrypt-nodejs');
var User = require('../models/user');
var jwt = require('../services/jwt')

function pruebas(req,res){
    res.status(200).send({
        message: 'probando una accion del controlador de usuarios en api rest con Nose y mongo db'
    })
}
function saveUser(req,res){
    var user = new User();

    var params = req.body;

    console.log(params);

    user.name = params.name;
    user.surname = params.surname;
    user.email = params.email;
    user.role = 'ROLE_USER';
    user.image = 'NULL';

    if(params.password){
        //encriptar contraseña y guardar los datos
        bcrypt.hash(params.password,null,null,function(err,hash){
            user.password = hash;
            if(user.name != null && user.surname != null && user.email != null){
                //guardar el usuario
                user.save((err,userStored) => {
                    if(err){
                        res.status(500).send({message:'Se ha producido un error al guardar el usuario'});
                    }else{
                        if(!userStored){
                            res.status(404).send({message:'No se ha registrado el usuario'});
                        }else{
                            res.status(200).send({userStored});
                        }
                    }
                })
            }else{
                //res.status(200).send({message:'Introduzca los campos correspondientes'});
            }
        });
    }else{
        res.status(200).send({message:'Introduzca la contraseña'});
    }
}

function loginUser(req,res){
    var params = req.body;
    
    var email = params.email;
    var password = params.password;

    User.findOne({email:email.toLowerCase()}, (err,user) => {
        if(err){
            res.status(500).send({message: 'Error en la peticion'});
        }else{
            if(!user){
                res.status(404).send({message: 'El usuario no existe'});
            }else{
                //comprobar la contraseña
                bcrypt.compare(password, user.password, function(err,check){
                    if(check){
                        //devolver datos del usuario logueado
                        if(params.gethash){
                            //devolver  un token de jwt
                            res.status(200).send({
                                token: jwt.createToken(user)
                            });
                        }else{
                            res.status(200).send({user});
                        }

                    }else{
                        res.status(404).send({message: 'El usuario no se ha logueado'});
                    }
                })
            }
        }
    });
}

function updatedUser(req, res) {
    var userId = req.params.id;
    var update = req.body;

    User.findByIdAndUpdate(userId, update, (err, userUpdated) => {
        if(err){
            res.status(500).send({message:'Error al actualizar el usuario'});
        }else{
            if(!userUpdated){
                res.status(404).send({message:'No se ha podido actualizar el usuario'});
            }else{
                res.status(200).send({user: userUpdated});
            }
        }
    })
}


module.exports = {
    pruebas,
    saveUser,
    loginUser,
    updatedUser
};
