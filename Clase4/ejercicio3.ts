// Actividad 3: Crear una función genérica 
// Crea una función genérica que tome un parámetro de cualquier tipo y lo 
// devuelva. Prueba la función con diferentes tipos de datos.

function generica<T>(parametro:T):T {
    return parametro
}

console.log(generica<number>(4));
console.log(generica<string>("Cualquier valor"));
console.log(generica<boolean>(true));


