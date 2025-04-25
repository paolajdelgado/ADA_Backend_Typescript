// Ejercicio 5: Decidir Entre Clases Abstractas e Interfaces 
// Diseña un sistema de transporte público. Define: 
// • Una interfaz VehiculoElectrico con el método cargarBateria(). 
// • Una clase abstracta Transporte con el método abstracto mover(). 
// Implementa ambas estructuras en una clase concreta AutobusElectrico.

interface VehiculoElectrico{
    cargarBateria(): void;
}

abstract class Transporte{
    abstract mover(): void;
}

class AutobusElectrico extends Transporte implements VehiculoElectrico{
    cargarBateria(): void {
        console.log('Pare, es necesario recargar la bateria del vehiculo');
    }

    mover(): void {
        console.log('El autobus se mueve por el centro de la ciudad');
    }
}

let bus1 = new AutobusElectrico();
bus1.cargarBateria();
bus1.mover();