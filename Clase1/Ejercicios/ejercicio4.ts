// Ejercicio 4: Parámetros opcionales simulados 
// Declara dos variables, una para almacenar un nombre y otra para almacenar una 
// edad. Si la edad no se asigna, debes imprimir un mensaje que diga "Edad no 
// proporcionada". Si se asigna la edad, imprímela junto al nombre. 

let nombre2: string = "Eva";
let edad2: number = 60;

if(nombre2 === null){
    console.log(`Nombre: ${nombre2}. Edad: No proporcionada`);
} else{
    console.log(`Nombre: ${nombre2}. Edad: ${edad2}`);
};

//NO CORRE
