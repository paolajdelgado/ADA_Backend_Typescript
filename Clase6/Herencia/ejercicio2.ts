// Ejercicio 2: Herencia Simple con Acceso 
// Consigna: Crea una clase base Maestro con propiedades protegidas nombre y 
// materia, y un método enseñar(). Luego, crea una clase derivada 
// MaestroMatematicas que extienda de Maestro y sobrescriba el método 
// enseñar() para imprimir un mensaje específico de matemáticas. 

class Maestro {
    protected nombre: string;
    protected materia: string;

    constructor(nombre: string, materia: string){
        this.nombre = nombre;
        this.materia = materia;
    }

    enseñar(): void {}
}

class MaestroMatematicas extends Maestro{
    constructor(nombre: string){
        super(nombre, 'Matematicas')
    }

    enseñar(): void {
        console.log(`Soy el maestro ${this.nombre} e imparto la materia de matematicas`);   
    }
}

let maestro1 = new MaestroMatematicas('Miguel');
maestro1.enseñar();