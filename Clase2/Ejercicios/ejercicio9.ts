// Ejercicio 9: Funciones con retorno void y manipulación de objetos 
// Consigna: Crea un objeto llamado coche con las propiedades marca, modelo, y 
// encendido (booleano). Define una función encenderCoche que acepte el objeto 
// coche y cambie el valor de encendido a true. Muestra el estado del coche en la 
// consola antes y después de llamar a la función. 

let coche = { marca: "Volkswagen", modelo: "Jetta", encendido: false }

function encenderCoche(coche: {marca: string, modelo: string, encendido: boolean}): void{
    coche.encendido = true;
}


console.log("Estado del coche antes de llamar a la funcion: ", coche);
encenderCoche(coche);
console.log("Estado del coche despues de llamar a la funcion: ", coche);  