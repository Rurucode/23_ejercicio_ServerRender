/***************Dependencias***************/
const express = require('express')
const fetch = require('./utils/fetch')

const film_controlador = require('./controllers/controlador_film')

/***************Express***************/
const app = express()
app.use(express.json()); //Permite el envio de JSON al servidor
app.use(express.static('public')) //Habilitar los archivos para que sean estaticos
app.use(express.urlencoded({ extended: false })); //Para solucionar el undefined en el form.
/************ Activar Pug ************/
app.set('view engine', 'pug'); // Especifico el motor de plantillas
app.set('views','./views'); 

/************ Rutas ************/

// http://localhost:3000
app.get('/', film_controlador.home)

app.post('/', film_controlador.titulo)

app.get('/film/:titulo', film_controlador.film)



 



app.listen(3000)