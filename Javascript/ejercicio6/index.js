// - Una variable que contenga la lista de la compra (mínimo 5 elementos)
const listaCompras = ["Pan", "Zanahoria", "Palta", "Yerba", "Hamburguesa"]

// - Modifica la lista de la compra y añádele "Aceite de Girasol"
listaCompras.push("Aceite de Girasol")

// - Vuelve a modificar la lista de la compra eliminando "Aceite de Girasol"
listaCompras.pop();


// - Una lista de tus 3 películas favoritas (objetos con propiedades: titulo, director, fecha)
const favoriteMovies = [
    {
        titulo: "The witch",
        director: "Robert Eggers",
        fecha: 2015
    },
    {
        titulo: "Lost Highway",
        director: "David Lynch",
        fecha: 1997
    },
    {
        titulo: "Rosemary's Baby",
        director: "Roman Polanski",
        fecha: 1968
    }
]

// - Una nueva lista que contenga las películas posteriores al 1 de enero de 2010 (utilizando filter)
const newMovies = favoriteMovies.filter(movie => movie.fecha > new Date(2010, 0, 1));

// - Una nueva lista que contenga los directores de la lista de películas original (utilizando map)
const directores = favoriteMovies.map(movie => movie.director)


// - Una nueva lista que concatene la lista de directores y la lista de los títulos (utilizando concat)
const titulos = favoriteMovies.map(movie => movie.titulo)

// - Una nueva lista que concatene la lista de directores y la lista de los títulos (utilizando concat)
const directores_titulos = directores.concat(titulos)

// - Una nueva lista que concatene la lista de directores y la lista de los títulos (utilizando el factor de propagación)
const directores_titulos2 = [...directores, ...titulos]

