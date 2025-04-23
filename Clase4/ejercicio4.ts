// Actividad 4: Usar aserciones de tipo 
// Declara una variable de tipo any y usa una aserción para tratarla como string, 
// accediendo a la propiedad .length.

let variable: any = "Hola";
let longitud: number = (<string>variable).length;
console.log(`La longitud de la variable ${variable} es de ${longitud} caracteres`);
