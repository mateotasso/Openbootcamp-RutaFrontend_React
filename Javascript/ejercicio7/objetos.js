// - Un objeto con tus datos personales (nombre, apellido, edad, altura, eresDesarrollador)
const persona = 
    {
        nombre: "Jorge",
        apellido: "Curán",
        edad: 55,
        altura: 185,
        eresDesarrollador: false
    }


// - Una variable que obtenga tu edad a partir del objeto anterior

const edad = persona.edad;

// - Una lista que contenga el objeto con tus datos personales y un nuevo objeto con los datos personales de tus dos mejores amig@s
const listaObjetos = [ 
    persona, 
    { nombre: "Juan", apellido: "Curón", edad: 25, altura: 156, eresDesarrollador: true },
    { nombre: "Diega", apellido: "Curín", edad: 33, altura: 178, eresDesarrollador: false }
]

// - Una nueva lista con los objetos de la lista anterior ordenados por edad, de mayor a menor
listaObjetos.sort((a, b) => b.edad - a.edad)