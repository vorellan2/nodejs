const express = require('express');
const response = require('../../network/response.js')
const controller = require('./controller');
const router = express.Router();

router.get('/', function(req,res){
    
    res.header({
        "curstom-header": "nuestro valor personalizado",
    })
    //res.send('Lista de mensajes');
    console.log(req.headers);
    response.success(req,res,'Lista de mensajes')

})

router.post('/', function(req,res){
    
    console.log(req.query);
    console.log(req.body);
    //res.status(201).send({error:'', body:'creado correctamente'});
    
    controller.addMessage(req.body.user, req.body.message)
        .then(() => {
            response.success(req, res, 'Creado correctamente', 201);
        })
        .catch(e => {
            response.error(req, res, 'Informacion invalida', 400, 'Error en el controller');
        });

    if (req.query.error == "ok"){

        response.error(req,res,'Error inesperado',500,'Es solo una simulacion')
    }else{
        response.success(req,res,'Creado correctamente')
    }
    

});

module.exports = router;