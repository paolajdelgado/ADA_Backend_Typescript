// Ejercicio 3: Herencia Múltiple Indirecta (vía Interfaces) 
// Consigna: Crea dos interfaces: Volador con el método volar() y Transportable 
// con el método transportar(). Luego crea una clase Avion que implemente ambas 
// interfaces y sobrescriba los métodos. 

interface Volador{
    volar(): void;
}

interface Transportable{
    transportar(): void;
}

class Avion implements Volador, Transportable{
    volar(){
        console.log('El avion esta volando sobre Sydney, Australia');
    }

    transportar() {
        console.log('El avion esta transportando personas y equipaje');   
    }
}

let avion1 = new Avion();
avion1.volar();
avion1.transportar();