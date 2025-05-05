// 6. Ejercicio de Supermercado 
// Crea una clase Producto que contenga propiedades privadas como nombre, 
// precio y cantidad. Utiliza getters y setters, asegurándote de que precio no sea 
// negativo y que cantidad no sea menor que 0. 

export class Producto {
    private _nombre: string;
    private _precio !: number;
    private _cantidad !: number;

    constructor(nombre:string, precio:number, cantidad:number){
        this._nombre = nombre;
        this._precio = precio;
        this._cantidad = cantidad;
    }

    public get nombre() : string{
        return this._nombre;
    }

    public get precio(): number{
        return this._precio;
    }

    public set precio(valor: number){
        if (valor >= 1){
            this._precio = valor;
        } else {
            console.log('Error. El precio del producto no puede ser que 1 peso');
        }
    }

    public get cantidad(): number{
        return this._cantidad;
    }

    public set cantidad(valor: number){
        if(valor >= 0){
            this._cantidad = valor;
        } else {
            console.log('Error. La cantidad del producto no puede ser negativa');
            
        }
    }


    mostrarInformacion(): void{
        console.log(`El producto ${this.nombre} cuenta con ${this.cantidad} unidades y su precio por unidad es de ${this.precio} pesos`);
    }
}

let producto1 = new Producto('Laptop', 15000, 3);
producto1.mostrarInformacion();