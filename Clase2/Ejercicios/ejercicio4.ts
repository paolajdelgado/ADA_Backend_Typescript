// Ejercicio 4: Función que devuelve un objeto 
// Consigna: Crea una función llamada crearLibro que acepte tres parámetros: 
// titulo (string), autor (string) y paginas (number). La función debe devolver un 
// objeto con esas propiedades. Luego, crea dos libros utilizando la función y 
// muestra sus detalles en la consola. 

function crearLibro(titulo: string, autor: string, paginas: number) {
    return {
        tituloLibro: titulo,
        autorLibro: autor,
        numeroPaginas: paginas
    }
}

let libro1 = crearLibro("La biblioteca de la medianoche", "Matt Haig", 336)
console.log(libro1);
let libro2 = crearLibro("Frankenstein", "Mary Shelley", 264)
console.log(libro2);