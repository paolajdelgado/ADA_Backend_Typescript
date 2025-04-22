// Actividad 1: Modularización Básica 
// Crea un módulo llamado mathUtils.ts que contenga las siguientes funciones: 
// • add(a: number, b: number): number: devuelve la suma de a y b. 
// • subtract(a: number, b: number): number: devuelve la resta de a y b. 
// Luego, crea un archivo main.ts que importe mathUtils y utilice ambas funciones 
// para mostrar el resultado en la consola. 

export function add(a: number, b:number): number {
     return a + b
}

 export function subtract(a: number, b: number): number {
    return a - b
}

