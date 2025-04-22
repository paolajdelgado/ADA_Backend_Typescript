// Actividad 5: Re-exportación de Módulos 
// Crea un módulo index.ts que re-exporte todas las funciones y constantes de los 
// módulos mathUtils.ts y stringUtils.ts. 
// En main.ts, importa todo desde index.ts y utiliza al menos una función de cada 
// módulo, mostrando el resultado en la consola.

export * from '../Ejercicio1/mathUtils'
export * from '../Ejercicio2/stringUtils'