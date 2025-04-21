// Ejercicio 2: Uso de funciones con parámetros opcionales 
// Consigna: Define una función llamada saludar que acepte un parámetro nombre 
// de tipo string y otro opcional saludo de tipo string. Si el parámetro saludo no es 
// proporcionado, la función debe usar "Hola" por defecto. Retorna el saludo y 
// muestra el resultado en la consola. 

function saludar(nombre: string, saludo?: string){
    if(saludo){
        return `${saludo} ${nombre}`
    }
    return `Bienvenida, ${nombre}`
}

console.log(saludar("Eva"));
console.log(saludar("Eva", "Hola"));