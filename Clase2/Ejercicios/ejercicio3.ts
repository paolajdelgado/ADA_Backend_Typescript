// Ejercicio 3: Creación y manipulación de objetos 
// Consigna: Crea un objeto llamado deportista que tenga las propiedades nombre 
// (string), deporte (string), y energia (number). Luego, define una función entrenar 
// que acepte el objeto deportista y un número de horas de entrenamiento, 
// disminuyendo la energía del deportista en 5 por cada hora de entrenamiento. Al 
// final, muestra el estado del deportista en la consola. 

let deportista : {nombre: string, deporte: string, energia: number} = {
    nombre: "Abi",
    deporte: "Taekwondo",
    energia: 150
}

function entrenar(deportista : {nombre:string, deporte: string, energia: number}, horasEntrenamiento: number){
    deportista.energia -= horasEntrenamiento * 5
    if(deportista.energia < 0){
        deportista.energia = 0;
    }
    console.log(`Despues de entrenar ${horasEntrenamiento}, el estado de ${deportista.nombre} es: ${deportista.energia}`);
}


// Prueba de la función
entrenar(deportista, 3);
entrenar(deportista, 5);