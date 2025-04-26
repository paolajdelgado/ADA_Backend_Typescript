// 1. Ejercicio de Coche 
// Diseña una clase Coche que represente un vehículo. Esta clase debe tener 
// propiedades privadas para marca, modelo, año, y kilometraje. Implementa 
// métodos para encender el coche y realizar un viaje, que incrementen el 
// kilometraje. Asegúrate de que el año no sea menor que 1886 (el año en que se 
// inventó el coche) y que el kilometraje no pueda ser negativo. Si se intenta 
// establecer un año o kilometraje no válido, imprime un mensaje indicando el 
// error. 

export class Coche{
    private _marca: string;
    private _modelo: string;
    private _año: number;
    private _kilometraje: number;

    constructor(marca: string, modelo: string, año: number, kilometraje: number){
        this._marca = marca;
        this._modelo = modelo;
        
        if(año >= 1886){
            this._año = año
        } else {
            console.log('El coche no puede ser menor al año 1886');
            this._año = 1886
        }

        if(kilometraje >= 0){
            this._kilometraje = kilometraje
        } else {
            console.log('El kilometraje no puede ser negativo');
            this._kilometraje = 0
        }
    }

    public encenderCoche(): void {
        console.log(`El coche marca ${this._marca} y modelo ${this._modelo} está encendido`);
        
    }

    realizarViaje(distancia: number): void {
        if(distancia > 0){
            this._kilometraje += distancia;
        }else{
            console.log('La distancia del viaje debe ser mayor a cero');
            
        }
    }

    public mostrarInformacion():void {
        console.log(`Coche: ${this._marca} ${this._modelo}, año: ${this._año}, kilometraje: ${this._kilometraje}`);
        
    }
}

let coche1= new Coche('Volkswagen', 'Jetta', 2010, 10000);
coche1.mostrarInformacion();
coche1.encenderCoche();
coche1.realizarViaje(200);
coche1.mostrarInformacion();

console.log('-------------------------------------------------');

let coche2= new Coche('Volkswagen', 'Jetta', 1885, -1);
coche2.mostrarInformacion();
coche2.encenderCoche();
coche2.realizarViaje(0);
coche2.mostrarInformacion();