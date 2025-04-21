// Ejercicio 7: Función que modifica propiedades de un objeto 
// Consigna: Crea una función llamada aumentarSalario que acepte un objeto 
// empleado con las propiedades nombre (string) y salario (number), y un número 
// que represente el porcentaje de aumento. La función debe aumentar el salario 
// del empleado y devolver el nuevo salario. Muestra en la consola el resultado. 

function aumentarSalario (empleado: {nombre: string, salario: number}, aumento: number): number{
    empleado.salario += empleado.salario  * (aumento/100)
    return empleado.salario
}


let empleado = { nombre: "Frida", salario: 40000 };
let nuevoSalario = aumentarSalario(empleado, 10);
console.log(`Después del aumento, el salario de ${empleado.nombre} es: ${nuevoSalario}`);