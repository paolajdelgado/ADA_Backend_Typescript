// Actividad 5: Usar aserciones dobles 
// Crea una variable de tipo any y haz una conversión con aserciones dobles para 
// convertirla en un number. Muestra el resultado.

export let variable: any = 349
export let numero: number = (variable as unknown as number)
console.log(numero);

