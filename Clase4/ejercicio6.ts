// Actividad 6: Filtrar elementos de un arreglo genérico usando For...Of y 
// Aserciones 
// Crea una función genérica llamada filtrarElementos que reciba un arreglo de 
// valores mixtos (por ejemplo, number | string | boolean). Usando un bucle for...of, 
// filtra solo los valores que sean cadenas de texto (string). Utiliza aserciones de 
// tipo para acceder a las propiedades específicas de string. 

function filtrarElementos<T>(array: T[]): string[]{
    const resultado: string[] = [];

    for (const elemento of array) {
        if (typeof elemento === 'string') {
            resultado.push(elemento as string);
        }
    }

    return resultado;

}


const valoresMixtos: (number | string | boolean)[] = [123, 'Hola', true, 'Paola', 42, false, 'Doctor'];
const cadenasFiltradas = filtrarElementos(valoresMixtos);

console.log('Elementos que son cadenas de texto:', cadenasFiltradas);