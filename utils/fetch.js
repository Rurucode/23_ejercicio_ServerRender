const fetch = require('node-fetch');


// const apiKey = "eca8b041";

// http://www.omdbapi.com/?t=avatar&apikey=eca8b041

const buscarPelicula = async (nombre) => {
    try{
        const data = await fetch(`http://www.omdbapi.com/?t=${nombre}&apikey=eca8b041`);
        const result = await data.json();
        // console.log(result.Title);
        const filtrado = {
            titulo: result.Title,
            year: result.Year,
            director: result.Director,
            descripcion: result.Plot,
            imagen: result.Poster
        }
    
        return filtrado;
    }
    catch(error){
        console.log(`No ha funcionado la llamada al fetch ${error}`);
    }
}
// buscarPelicula('avatar');
module.exports = buscarPelicula;

// buscarPelicula("bad boys").then(data=>{
//     let obj = {
//         Title: data.Title,
//         Year: data.Year,
//         Director: data.Director
//     }
//     console.log(obj)});