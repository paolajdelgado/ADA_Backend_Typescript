// Ejercicio 6: Sistema de Gestión de Productos Usando Abstracción y Clases  
// Crea un sistema de inventario que gestione diferentes tipos de productos. 
// Define una clase abstracta Producto con: 
// • Propiedades protegidas: nombre, precio. 
// • Un método abstracto calcularDescuento(). 
// Implementa dos subclases: Ropa y Electronica. 
// • La subclase Ropa aplicará un 10% de descuento. 
// • La subclase Electronica tendrá un 5% de descuento. 
// Añade un método concreto en la clase abstracta para mostrar la información del 
// producto.

abstract class Producto{
    protected nombre: string;
    protected precio: number;

    constructor(nombre:string, precio: number){
        this.nombre = nombre,
        this.precio = precio
    }

    abstract calcularDescuento(): number;

    mostrarInformacion(): void{
        console.log(`El producto ${this.nombre} tiene un precio de ${this.precio}`);
    };
}

class Ropa extends Producto{
    constructor(nombre:string, precio:number){
        super(nombre, precio)
    }

    calcularDescuento(): number {
        return this.precio * 0.90
    }

    mostrarInformacion(): void {
        super.mostrarInformacion();
        console.log(`Con el descuento del 10% a la ropa, el precio final es de $${this.calcularDescuento()}`);
    }
}


class Electronica extends Producto{
    constructor(nombre:string, precio:number){
        super(nombre, precio)
    }

    calcularDescuento(): number {
        return this.precio * 0.95;
    }

    mostrarInformacion(): void {
        super.mostrarInformacion();
        console.log(`Con el descuento del 5% a la electronica, el precio final es de $${this.calcularDescuento()}`);
    }
}

let ropa1 = new Ropa('Falda', 150)
ropa1.mostrarInformacion();

let electronico1 = new Electronica('Laptop', 15000);
electronico1.mostrarInformacion();