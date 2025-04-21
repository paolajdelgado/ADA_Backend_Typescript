// Ejercicio 5: Función con parámetros rest 
// Consigna: Crea una función llamada sumarTodos que acepte una cantidad 
// indefinida de números y devuelva su suma. Luego, llama a la función con varios 
// números y muestra el resultado en la consola.

function sumarTodos(... numeros: number[]): number{
    return numeros.reduce((total, numero) => total + numero, 0)
}

console.log(sumarTodos(3, 5, 10, 20));
console.log(sumarTodos(3.5, 10, 34.8));
