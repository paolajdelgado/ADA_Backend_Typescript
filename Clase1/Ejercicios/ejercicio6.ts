// Ejercicio 6: Uso de unknown 
// Declara una variable de tipo unknown. Asigna diferentes tipos de valores a esta 
// variable, y utiliza el operador typeof para verificar el tipo antes de imprimir los 
// valores. 

let variableUnknown: unknown;

variableUnknown = "Soy una variable string"; // String
if (typeof variableUnknown === "string") {
  console.log(`Soy una variable de tipo string y mi valor es: ${variableUnknown}`);
}

variableUnknown = 36; // Number
if (typeof variableUnknown === "number") {
  console.log(`Soy una variable de tipo y mi valor es: ${variableUnknown}`);
}

variableUnknown = true; // Boolean
if (typeof variableUnknown === "boolean") {
  console.log(`Soy una variable de tipo boolean y mi valor es: ${variableUnknown}`);
}
