import { createMultiplier } from "./higherOrderFunctions";

const multiplicador = createMultiplier(2);
const resultado = multiplicador(9);

console.log(`El resultado de multiplicar 2 por 9 es: ${resultado}`);

