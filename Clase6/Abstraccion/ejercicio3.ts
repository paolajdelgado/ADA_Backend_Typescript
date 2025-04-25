// Ejercicio 3: Interfaces - Sistema de Gestión de Usuarios 
// Crea una interfaz Usuario que tenga las propiedades: 
// • nombre (obligatoria). 
// • edad (opcional). 
// • readonly id (solo lectura). 
// Implementa esta interfaz en una clase UsuarioConcreto. Luego, intenta 
// modificar la propiedad id para mostrar cómo se aplican las restricciones de solo 
// lectura. 

interface Usuario{
    nombre: string,
    edad?: number,
    readonly id: string
}

// Clase UsuarioConcreto que implementa la interfaz Usuario
class UsuarioConcreto implements Usuario {
    constructor(public nombre: string, public id: string, public edad?: number) {}
}


const usuario1 = new UsuarioConcreto('Paola', 'A145', 29);
console.log(`Usuario: ${usuario1.nombre}, ID: ${usuario1.id}, Edad: ${usuario1.edad}`);

// Intento de modificar una propiedad readonly
//usuario1.id = 'A541'; //No se puede por ser de tipo readonly
