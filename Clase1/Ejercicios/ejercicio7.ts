// Ejercicio 7: Tipos literales 
// Usa un tipo literal para declarar una variable que solo acepte uno de los valores: 
// "Lunes", "Martes", "Miércoles". Intenta asignar otros valores y observa el error en 
// TypeScript. 

type DiaSemana = "Lunes" | "Martes" | "Miércoles";

let dia: DiaSemana;

dia = "Lunes";
dia = "Martes";
dia = "Miércoles"; 

//dia = "Jueves";
