// Ejercicio 2: Clases Abstractas - Sistema de Vehículos 
// Crea una clase abstracta Vehiculo con una propiedad velocidad y un método 
// abstracto mover(). Luego, implementa dos clases concretas: Auto y Bicicleta. Usa 
// los modificadores de acceso para controlar la visibilidad de las propiedades.

abstract class Vehiculo{
    protected velocidad: number;

    constructor(velocidad: number){
        this.velocidad = velocidad;
    }

    abstract mover(): void;
}

class Auto extends Vehiculo{
    constructor(velocidad: number){
        super(velocidad);
    }

    mover(): void {
        console.log(`El auto puede moverse a una velocidad de ${this.velocidad} km/h`);
    }
}

class Bicileta extends Vehiculo{
    constructor(velocidad:number){
        super(velocidad)
    }

    mover(): void {
        console.log(`La bicicleta puede moverse a una velocidad de ${this.velocidad} km/h`);
    }
}


let auto1 = new Auto(220);
auto1.mover();

let bici1 = new Bicileta(25)
bici1.mover();