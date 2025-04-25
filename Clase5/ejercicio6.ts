// Ejercicio 6: Uso de this 
// 1. Crea una clase llamada Mariposa con propiedades nombre y color, y un 
// método volar() que use this para referirse a las propiedades de la 
// instancia. 

class Mariposa {
    nombre: string;
    color: string;

    constructor(nombre: string, color: string){
        this.nombre = nombre;
        this.color = color
    }

    volar(): void{
        console.log(`Una mariposa de nombre ${this.nombre} y de color ${this.color} se encuentra volando a mi lado`);
    }
}

// 2. Crea una instancia de la clase y llama al método. 
let mariposa1 = new Mariposa('Calma', 'Azul')
mariposa1.volar();
