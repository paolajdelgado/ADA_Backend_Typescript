// Ejercicio 8: Funciones con diferentes tipos de retorno 
// Consigna: Crea una función llamada calcularArea que acepte el tipo de figura 
// ("circulo" o "rectangulo") y luego acepte los parámetros necesarios para cada 
// tipo de figura (radio para el círculo y largo y ancho para el rectángulo). La 
// función debe retornar el área de la figura. Usa tipos específicos para cada caso. 


function calcularArea(tipo: string, valor1: number, valor2: number): number | undefined {
    if (tipo === "circulo") {
        return 3.1416 * (valor1 * valor2); 
    } else if (tipo === "rectangulo") {
        return valor1 * valor2;
    } else {
        console.log("Tipo de figura no válido. Usa 'circulo' o 'rectangulo'.");
        return undefined;
    }
}

// Uso de la función
console.log("Área del círculo con radio 5:", calcularArea("circulo", 5, 5)); 
console.log("Área del rectángulo de 10x4:", calcularArea("rectangulo", 10, 4));