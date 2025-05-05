// 3. Ejercicio de Estudiante 
// Diseña una clase Estudiante que contenga propiedades privadas para nombre, 
// edad, y calificaciones. Implementa métodos para agregar calificaciones y 
// calcular el promedio. Imprime un mensaje en caso de que se intente agregar 
// una calificación inválida (fuera del rango 0-100) o si no hay calificaciones para 
// calcular el promedio. 

export class Estudiante {
    private _nombre: string;
    private _edad: number;
    private _calificaciones: number[];

    constructor(nombre: string, edad: number){
        this._nombre = nombre;
        this._edad = edad;
        this._calificaciones = []
    }

    public agregarCalificaciones(calificacion: number): void {
        if(calificacion >= 0 && calificacion <= 100){
            this._calificaciones.push(calificacion)
            console.log('Calificación añadida correctamente')
        } else {
            console.log('Error. La calificacion es invalida. Debe contener un numero entre el 0 y 100.');
        }
    }


    public calcularPromedio(): number | void {
        if(this._calificaciones.length === 0){
            console.log('Error. No hay calificaciones registradas');
        } else {
            const suma = this._calificaciones.reduce((acc, nota) => acc + nota, 0);
            const promedio = suma / this._calificaciones.length;
            console.log(`El promedio de ${this._nombre} es: ${promedio}`);
            return promedio;
        }
    }

    public mostrarInformacion(): void {
        console.log(`Nombre: ${this._nombre}, Edad: ${this._edad}, Calificaciones: [${this._calificaciones.join(', ')}]`);
    }
}


let estudiante1 = new Estudiante('Paola', 20);
estudiante1.mostrarInformacion();
estudiante1.agregarCalificaciones(95);
estudiante1.agregarCalificaciones(88);
estudiante1.agregarCalificaciones(-10);
estudiante1.calcularPromedio();