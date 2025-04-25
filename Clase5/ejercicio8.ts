//Investigar concepto super() 

// Ejercicio 8: Integramos contenidos - Animales 
// 1. Crea un pequeño sistema de gestión de Animales que incluya las clases 
// Animal, Mascota, y MascotaExotica. 
// o La clase Animal debe tener propiedades como nombre y tipo. 
// o La clase Mascota debe extender Animal e incluir una propiedad para 
// dueño. 
// o La clase MascotaExotica debe extender Animal e incluir una 
// propiedad para habitat. 
// 2. Implementa métodos para mostrar información sobre cada tipo de animal 
// y agrega ejemplos de instanciación.

export class Animal{
    public nombre: string;
    public tipo: string;

    constructor(nombre:string, tipo:string){
        this.nombre= nombre;
        this.tipo=tipo;
    }

    public informacionAnimal(): void{
        console.log(`Animal de nombre: ${this.nombre}, tipo: ${this.tipo}`);
    }
}

class Mascota extends Animal{
    public dueño: string;

    constructor(nombre: string, tipo: string, dueño:string){
        super(nombre, tipo);
        this.dueño = dueño;
    }

    public informacionAnimal(): void {
        super.informacionAnimal();
        console.log(`Dueño: ${this.dueño}`);
    }
}

class MascotaExotica extends Animal{
    public propiedad: string;

    constructor(nombre: string, tipo: string, propiedad: string){
        super(nombre, tipo);
        this.propiedad=propiedad;
    }

    public informacionAnimal(): void {
        super.informacionAnimal();
        console.log(`Propiedad para habitar: ${this.propiedad}`);
    }
}

//ejemplos
let animal1 = new Animal('Triangulito', 'Tiburón ballena');
animal1.informacionAnimal();
let mascota1 = new Mascota('Neji', 'Perro', 'Paola');
mascota1.informacionAnimal();
let mascotaExotica1 = new MascotaExotica('Rolando', 'Guacamayo Azul', 'Departamento A50')
mascotaExotica1.informacionAnimal();

