import {
    add,
    subtract,
    capitalize,
    reverse
} from './index'


console.log("La suma de 8 + 5 es: ", add(8, 55));
console.log("La resta de 13 - 6 es: ", subtract(13,6));

let cadena1= "probando de nuevo esta funcion"
console.log('Convertir la primer letra de esta cadena a mayuscula: ', cadena1);
console.log('Resultado: ', capitalize(cadena1));

let cadena2= "anita lava la tina"
console.log('Dale reversa a la siguiente cadena: ', cadena2);
console.log('Resultado: ', reverse(cadena2));