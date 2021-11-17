const express = require('express')
const app = express()

app.set('view engine', 'pug'); // Especifico el motor de plantillas
app.set('views','./views'); 
app.use(express.json());

 
app.get('/', function (req, res) {
  res.render('home')
})



// app.get('/', function (req, res) {
//     res.send('Hello World')
//   })


//   app.get('/', function (req, res) {
//     res.send('Hello World')
//   })



app.listen(3000)