const fetch = require('node-fetch');

const apiKey = "eca8b041";

// http://www.omdbapi.com/?t=avatar&apikey=eca8b041

const buscarPelicula = async (nombre) => {
    try{
        const data = await fetch(`http://www.omdbapi.com/?t=${nombre}&apikey=${apiKey}`);
        const result = await data.json();
        return result;
    }
    catch(error){
        console.log(`No ha funcionado la llamada al fetch ${error}`);
    }
}

module.exports = buscarPelicula;

// buscarPelicula("bad boys").then(data=>{console.log(data)});