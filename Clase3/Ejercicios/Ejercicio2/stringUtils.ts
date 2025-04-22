// En el archivo stringUtils.ts, crea dos funciones: 
// • capitalize(str: string): string: devuelve el string con la primera letra en 
// mayúscula. 
// • reverse(str: string): string: devuelve el string al revés. 
// Exporta ambas funciones como exportaciones nombradas. Luego, en main.ts, 
// importa las funciones y utilízalas con una cadena de texto, mostrando el 
// resultado en la consola.

export function capitalize(str: string): string {
    return str.charAt(0).toUpperCase() + str.slice(1);
}

export function reverse(str: string): string {
  return str.split("").reverse().join("");
}

