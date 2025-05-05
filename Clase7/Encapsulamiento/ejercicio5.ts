// 5. Ejercicio de Vacaciones 
// Desarrolla una clase Vacacion que tenga propiedades privadas para destino, 
// duracion (en días) y presupuesto. Implementa getters y setters, asegurándote de 
// que duracion no sea menor que 1 y presupuesto sea mayor que 0. 

class Vacacion {
    private _destino: string;
    private _duracion!: number;
    private _presupuesto!: number;

    constructor(destino: string, duracion: number, presupuesto: number){
        this._destino = destino;
        this._duracion = duracion;
        this._presupuesto = presupuesto
    }

    public get destino(): string {
        return this._destino;
    }

    public get duracion(): number {
        return this._duracion;
    }

    public set duracion(valor: number) {
        if (valor >= 1) {
            this._duracion = valor;
        } else {
            console.log("Error: La duracion no puede ser menor que 1 dia.");
        }
    }

    public get presupuesto(): number {
        return this._presupuesto;
    }

    public set velocidad(valor: number) {
        if (valor >= 0) {
            this._presupuesto = valor;
        } else {
            console.log("Error: El presupuesto no puede ser negativo.");
        }
    }

    public mostrarInformacion(): void {
        console.log(`Destino: ${this._destino}, Duracion: ${this._duracion} dias, Presupuesto: ${this._presupuesto} dlls `);
    }
}

let viaje = new Vacacion('New York', 7, 3000);
viaje.mostrarInformacion();