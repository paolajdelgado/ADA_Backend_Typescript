// Ejercicio 4: Clases y Objetos 
// 1. Define una clase llamada Animal con propiedades nombre y tipo, y un 
// método hacerSonido(). 

class Animal {
    nombre: string;
    tipo: string;

    constructor(nombre: string, tipo: string) {
        this.nombre = nombre;
        this.tipo = tipo
    }

    hacerSonido(): void {
        console.log(`${this.nombre} hace un sonido`);   
    }
}


// 2. Crea una instancia de la clase Animal y llama al método. 
let animal1= new Animal('Neji', 'perro');
animal1.hacerSonido();

