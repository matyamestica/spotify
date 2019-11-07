'use strict'

var mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/spotifydb',(err,res) => {
    if(err){
        throw err;
    }else{
        console.log("***la conexion a la base de datos esta corriendo perfectamente***");
    }
})
