'use strict'

var mongoose = require('mongoose');
var app = require('./app');
var port = process.env.PORT || 3977;

mongoose.connect('mongodb://localhost:27017/spotifydb',(err,res) => {
    if(err){
        throw err;
    }else{
        console.log("***la conexion a la base de datos esta corriendo perfectamente***");

        app.listen(port, function(){
            console.log("Servidor del api rest escuchando en http://localhost:"+port);
        });
    }
})
