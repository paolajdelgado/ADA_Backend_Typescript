// Ejercicio 10: Funciones y arrays de objetos 
// Consigna: Crea una función llamada listarLibros que acepte un array de objetos 
// libro, donde cada libro tiene las propiedades titulo (string) y autor (string). La 
// función debe recorrer el array y mostrar los detalles de cada libro en la consola.

function listarLibros(libros: {titulo: string, autor: string}[]): void{
    console.log("Lista de libros: ");
    libros.forEach((libro, index) =>{
        console.log(`${index + 1}. ${libro.titulo} de ${libro.autor}`);
    })
}


// Array de libros
const libros = [
    { titulo: "El segundo sexo", autor: "Somine de Beauvoir" },
    { titulo: "Cumbres borrascosas", autor: "Emily Bronte" },
    { titulo: "Mujercitas", autor: "Louisa May Alcott" }
];

// Llamar a la función para mostrar los libros
listarLibros(libros);