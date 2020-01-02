const express = require('express');
const bodyParser = require('body-parser')
const router = express.Router();

const response = require('./network/response.js')


var app = express();

app.use(bodyParser.json());
app.use(router);


router.get('/message', function(req,res){
    
    res.header({
        "curstom-header": "nuestro valor personalizado",
    })
    //res.send('Lista de mensajes');
    console.log(req.headers);
    response.success(req,res,'Lista de mensajes')

})

router.post('/message', function(req,res){
    
    console.log(req.query);
    console.log(req.body);
    //res.status(201).send({error:'', body:'creado correctamente'});
    

    if (req.query.error == "ok"){

        response.error(req,res,'Error inesperado',500,'Es solo una simulacion')
    }else{
        response.success(req,res,'Creado correctamente')
    }
    

});

/*app.use('/', function(req, res){

    res.send('hola');
})*/

app.use('/app', express.static('public'));

app.listen(3000)
console.log('la aplicacion escucha en 3000')