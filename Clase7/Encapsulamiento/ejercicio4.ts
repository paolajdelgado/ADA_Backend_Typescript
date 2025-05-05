// 4. Ejercicio de Aviones 
// Crea una clase Avion con propiedades privadas para el modelo, capacidad y 
// velocidad. Implementa getters y setters para cada propiedad, asegurándote de 
// validar que la capacidad no sea menor que 0 y que la velocidad no sea negativa. 

// **********Nota sobre la inicialización de propiedades*********************** 
// En la clase Avion, se debe utilizar el operador de afirmación no nula (!) en las 
// propiedades _capacidad y _velocidad. Esto se hace para evitar un error de 
// TypeScript que indica que estas propiedades no estaban inicializadas en el 
// constructor. Este enfoque asegura que las propiedades serán asignadas 
// adecuadamente en el constructor mediante el uso de los setters, manteniendo 
// así la validación de los valores. Tener esto en cuenta para los demás ejercicios. 

export class Avion {
    private _modelo: string;
    private _capacidad!: number;
    private _velocidad!: number;

    constructor(modelo: string, capacidad: number, velocidad: number){
        this._modelo = modelo;
        this._capacidad = capacidad;
        this._velocidad = velocidad;
    }

    public get modelo(): string {
        return this._modelo;
    }

    public get capacidad(): number {
        return this._capacidad;
    }

    public set capacidad(valor: number) {
        if (valor >= 0) {
            this._capacidad = valor;
        } else {
            console.log("Error: La capacidad no puede ser menor que 0.");
        }
    }

    public get velocidad(): number {
        return this._velocidad;
    }

    public set velocidad(valor: number) {
        if (valor >= 0) {
            this._velocidad = valor;
        } else {
            console.log("Error: La velocidad no puede ser negativa.");
        }
    }

    public mostrarInformacion(): void {
        console.log(`Modelo: ${this.modelo}, Capacidad: ${this.capacidad}, Velocidad: ${this.velocidad} km/h`);
    }

}

let avion1 = new Avion("Boeing 737", 162, 850);
avion1.mostrarInformacion();
avion1.capacidad = 170;
avion1.velocidad = 750;
avion1.mostrarInformacion();
