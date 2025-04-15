//Ejemplo de tipos de primitivos en TS

//1. String
let nombre: string = "Ada Lovelace";
let saludo: string = `Hola ${nombre}, bienvenida a tryscript`;
console.log(saludo);

//2. Number
let entero: number = 42;
let decimal: number = 3.14;
let cientifico: number = 1e5;
console.log("Entero: ", entero);
console.log("Decimal: ", decimal);
console.log("Científico: ", cientifico);

//Boolean
let esEstudiante: boolean = true;
let tieneLicencia: boolean = false;
console.log("Es estudiante?: ", esEstudiante);
console.log("Tiene licencia?: ", tieneLicencia);

//4. Null
let valorNulo: null = null;
console.log("Valor nulo: ", valorNulo);

//5. Undefined
let valorIndefinido: undefined = undefined;
console.log("Valor indefinido: ", valorIndefinido);
