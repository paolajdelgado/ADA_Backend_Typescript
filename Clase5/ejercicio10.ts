// Ejercicio 10: Registro de Estudiantes 
// 1. Crea un sistema para registrar Estudiantes con las siguientes clases: 
// o Estudiante: Clase que incluye propiedades como nombre, edad y 
// curso, además de un método que muestre la información del 
// estudiante. 
// o RegistroEstudiantes: Clase que maneje una lista de estudiantes, con 
// métodos para agregar un estudiante y mostrar todos los estudiantes 
// registrados.

class Estudiante {
    public nombre: string;
    public edad: number;
    public curso: string;

    constructor(nombre: string, edad: number, curso: string){
        this.nombre = nombre;
        this.edad = edad;
        this.curso = curso;
    }

    public mostrarInformacion(): string {
        return `Nombre: ${this.nombre}, edad: ${this.edad}, curso: ${this.curso}`;
    }
}

class RegistroEstudiantes{
    private listaEstudiantes: Estudiante[] = [];

    agregarEstudiante(estudiante: Estudiante): void {
        this.listaEstudiantes.push(estudiante);
    }

    mostrarEstudiantes(): void {
        console.log('Lista de estudiantes registrados:');
        this.listaEstudiantes.forEach(estudiante =>{
            console.log(estudiante.mostrarInformacion());
        })
        
    }
}


const registro = new RegistroEstudiantes();

let estudiante1 = new Estudiante('Paola', 12, 'Fisica');
registro.agregarEstudiante(estudiante1);
let estudiante2 = new Estudiante('Alejandra', 13, 'Biologia');
registro.agregarEstudiante(estudiante2);
let estudiante3 = new Estudiante('Shakti', 12, 'Matematicas');
registro.agregarEstudiante(estudiante3);

registro.mostrarEstudiantes();

