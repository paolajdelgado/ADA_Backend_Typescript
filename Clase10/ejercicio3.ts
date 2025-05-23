// Ejercicio 3: Métodos Estáticos - Gestionar múltiples tareas con Promise.all() 
// Consigna: 
// Simula la consulta a tres APIs diferentes que devuelven información sobre 
// usuarios, productos y ventas. Cada consulta debe realizarse usando una función 
// que retorne una promesa. Usa Promise.all() para esperar a que todas las 
// consultas se completen y luego: 
// 1. Imprime un mensaje con los resultados si todas las consultas fueron 
// exitosas. 
// 2. Si alguna falla, imprime un mensaje de error. 
// 3. Usa un retraso distinto para cada promesa (por ejemplo, 2, 3 y 4 
// segundos). 
// Opcional: Modifica el comportamiento para que si alguna consulta falla, se 
// devuelva el mensaje: "No se pudo completar la operación: [API que falló]". 

function informacionUsuarios(){
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            let usuarios = [
            {"id" : 1, "nombre": "Paola"},
            {"id": 2, "nombre": "Alejandra"}
            ]


            if(usuarios.length > 0){
                resolve(`Informacion de los usuarios: ${usuarios}`)
            } else{
                reject('No existen usuarios registrados')
            }
        }, 2000)
    })
}

function informacionVentas(){
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            let ventas = [
            {"id" : 1, "comprador": "Paola", "producto": "laptop"},
            {"id": 2, "comprador": "Alejandra", "producto": "pantalla"}
            ]


            if(ventas.length > 0){
                resolve(`Informacion sobre las ventas: ${ventas}`)
            } else{
                reject('No existen ventas registradas')
            }
        }, 3000)
    })
}

function informacionProductos(){
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            let productos: any = [];

            if(productos.length > 0){
                resolve(`Informacion de los productos disponibles: ${productos}`)
            } else{
                reject('No existen productos disponibles a la venta')
            }
        }, 1000)
    })
}

const consulta1 = informacionProductos();
const consulta2 = informacionUsuarios();
const consulta3 = informacionVentas();

Promise.all([consulta1, consulta2, consulta3])
    .then((resultados) =>{
        console.log('Todas las consultas fueron exitosas: ', resultados);
    })
    .catch((error) =>{
        console.log('No se pudo completar la operacion: ', error);
    })

