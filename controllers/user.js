'use strict'

function pruebas(req,res){
    res.status(200).send({
        message: 'probando una accion del controlador de usuarios en api rest con Nose y mongo db'
    })
}

module.exports = {
    pruebas
};