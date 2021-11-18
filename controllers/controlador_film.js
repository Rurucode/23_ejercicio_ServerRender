const buscarPelicula = require('../utils/fetch')

// const cogerPelicula = (req, res) => {
//     console.log(req);
// }

const film_controlador = {
    
    home: (req, res) => {
        res.render('home');
    },

    titulo: (req, res) => {
        let capturaTitulo = req.body.titulo
        res.redirect(`film/${capturaTitulo}`)

    },

    film: async (req,res) => {
        console.log(req.params);
        let infoPelicula = await buscarPelicula(req.params.titulo)
        console.log(infoPelicula)
        await res.render('film', {Title: infoPelicula.titulo,
            Year: infoPelicula.year,
            urlImagen: infoPelicula.imagen});
    }

}

module.exports = film_controlador;c