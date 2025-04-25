// Ejercicio 9: Sistema de Gestión de Vehículos 
// 1. Crea un sistema de gestión de Vehículos que incluya las siguientes clases: 
// o Vehiculo: Clase base con propiedades como marca, modelo y un 
// método para mostrar información del vehículo. 
// o Coche: Clase que extiende Vehiculo e incluye una propiedad para 
// tipoCombustible y un método para mostrar la información completa 
// del coche. 
// o Motocicleta: Clase que extiende Vehiculo e incluye una propiedad 
// para cilindrada y un método para mostrar la información completa 
// de la motocicleta.

class Vehiculo{
    public marca: string;
    public modelo: string;

    constructor(marca: string, modelo: string){
        this.marca= marca;
        this.modelo = modelo;
    }

    public mostrarInformacion(): void {
        console.log(`Vehiculo modelo ${this.modelo}, marca ${this.marca}`);
    }
}

export class Coche extends Vehiculo{
    public tipoCombustible: string;

    constructor(modelo: string, marca: string, tipoCombustible: string){
        super(marca, modelo);
        this.tipoCombustible = tipoCombustible;
    }

    public mostrarInformacion(): void {
        super.mostrarInformacion()
        console.log(`Tipo de combustible: ${this.tipoCombustible}`);   
    }

}

class Motocicleta extends Vehiculo{
    public cilindrada: number;

    constructor(marca:string, modelo:string, cilindrada: number){
        super(marca, modelo);
        this.cilindrada = cilindrada;
    }

    public mostrarInformacion(): void {
        super.mostrarInformacion();
        console.log(`Cilindrada: ${this.cilindrada}`);
    }
}

let vehiculo1 = new Vehiculo('Volkswagen', 'Jetta');
vehiculo1.mostrarInformacion();
let coche1 = new Coche('Chirey', 'Tiggo8', 'Gasolina');
coche1.mostrarInformacion();
let motocicleta1 = new Motocicleta('BMW', 'G310', 313);
motocicleta1.mostrarInformacion();

