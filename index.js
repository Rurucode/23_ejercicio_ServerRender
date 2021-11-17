/***************Dependencias***************/
const express = require('express')
const fetch = require('./utils/fetch')

/***************Express***************/
const app = express()
app.use(express.json()); //Permite el envio de JSON al servidor
app.use(express.static('public')) //Habilitar los archivos para que sean estaticos
/************ Activar Pug ************/
app.set('view engine', 'pug'); // Especifico el motor de plantillas
app.set('views','./views'); 

/************ Rutas ************/

app.get('/', function (req, res) {
  res.render('home');
})





app.listen(3000)