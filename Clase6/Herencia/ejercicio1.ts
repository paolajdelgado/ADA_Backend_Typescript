// Ejercicio 1: Herencia Simple  
// Consigna: Define una clase base Torta que tenga propiedades generales como 
// nombre y tipo, y un método hacerDescripcion() que devuelva una descripción 
// general de la torta. Luego, crea una clase derivada TortaDeChocolate que 
// extienda de Torta y sobrescriba el método hacerDescripcion() para que devuelva 
// "Soy una torta de chocolate, deliciosa y suave." 

class Torta {
    nombre: string;
    tipo: string;

    constructor(nombre: string, tipo: string){
        this.nombre = nombre;
        this.tipo = tipo;
    }

    hacerDescripcion(): void{
        console.log(`Soy una torta llamada ${this.nombre}, de tipo ${this.tipo}.`);
        
    }
}

class TortaDeChocolate extends Torta{
    constructor(nombre: string){
        super(nombre, 'Chocolate');
    }

    hacerDescripcion(): void {
        console.log('Soy una torta de chocolate, deliciosa y suave.');
    }

}

let torta1 = new Torta('Torta de cumpleanios', 'vainilla');
torta1.hacerDescripcion();

let torta2 = new TortaDeChocolate('Torta de aniversario');
torta2.hacerDescripcion();