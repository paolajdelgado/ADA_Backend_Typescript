// 2. Ejercicio de Libro 
// Crea una clase Libro que represente un libro en una biblioteca. Esta clase debe 
// tener propiedades privadas para titulo, autor, anioPublicacion, y disponible. 
// Implementa métodos para prestar y devolver el libro, asegurando que solo se 
// pueda prestar si está disponible y que se pueda devolver solo si ha sido 
// prestado. Imprime un mensaje en caso de que se intente realizar una acción no 
// válida. 

class Libro {
    private _titulo: string;
    private _autor: string;
    private _anioPublicacion: number;
    private _disponible: boolean;

    constructor(titulo: string, autor: string, anio: number){
        this._titulo = titulo;
        this._autor = autor;
        this._anioPublicacion = anio;
        this._disponible = true
    }

    public prestarLibro(): void {
        if (this._disponible === true){
            console.log(`El libro "${this._titulo}" se encuentra disponible para su prestamo`);
            this._disponible = false;
        } else {
            console.log(`El libro "${this._titulo}" no se encuentra disponible`);
        }
    } 


    public devolverLibro(): void {
        if(this._disponible === false){
            this._disponible = true;
            console.log(`El libro ha sido devuelto.`);
        } else {
            console.log(`El libro no esta en prestamo. No puede ser devuelto.`);
            
        }
    }
}

export let libro= new Libro('1984', 'George Orwell', 1949);
libro.prestarLibro();
libro.prestarLibro();
libro.devolverLibro();
libro.devolverLibro();
