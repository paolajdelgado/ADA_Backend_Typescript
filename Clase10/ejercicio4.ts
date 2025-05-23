// Ejercicio 4: Promise.race() - Carrera entre Tareas 
// Consigna: 
// Crea tres promesas que representen tareas con tiempos de ejecución aleatorios. 
// Usa Promise.race() para que el programa imprima solo la primera tarea que se 
// complete. Luego: 
// 1. Asegúrate de que se imprime qué tarea ganó la carrera. 
// 2. Controla posibles errores si alguna de las promesas falla.

function ejecutarTarea(tarea: string){
    return new Promise((resolve, reject)=>{
        console.log(`Ejecutando tarea ${tarea}`);

        setTimeout(()=>{
            const resultado = Math.random() > 0.5;

            if (resultado) {
                resolve(`${tarea} respondió con éxito.`);
            } else {
                reject(`Error: ${tarea} no respondió.`);
            }
        }, Math.random() * 5000)
    })
}

const tarea1 = ejecutarTarea('Cocinar');
const tarea2 = ejecutarTarea('Asear departamento')
const tarea3 = ejecutarTarea('Salir a correr');

Promise.race([tarea1, tarea2, tarea3])
    .then((resultado) => {
        console.log('La tarea mas rapida en completarse fue: ', resultado);
    })
    .catch((error)=>{
        console.log('La tarea que primero fallo fue: ', error);
    })