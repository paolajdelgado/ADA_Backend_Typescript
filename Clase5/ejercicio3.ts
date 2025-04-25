// Ejercicio 3: Métodos en Objetos 
// 1. Modifica el objeto del ejercicio anterior para que incluya un método 
// llamado descripcion() que devuelva una descripción del libro. 
// 2. Llama al método y muestra el resultado en la consola. 

export let libro = {
    titulo: 'Ensayo sobre la ceguera',
    autor: 'Jose Saramago',
    anioPublicacion: 1995,

    descripcion(): string {
        return `"${this.titulo}" es una novela distópica que explora la naturaleza humana a través de una epidemia de ceguera que se propaga rápidamente en una ciudad. La ceguera, que es "blanca" porque los afectados no ven, pero siguen teniendo la vista, se convierte en una metáfora de la pérdida de moral y la deshumanización.`
    }
}

console.log(libro.descripcion());
 