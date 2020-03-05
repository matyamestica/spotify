'use strict'

var bcrypt = require('bcrypt-nodejs');
var User = require('../models/user');

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
    user.role = 'ROLE_ADMIN';
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




module.exports = {
    pruebas,
    saveUser
};
