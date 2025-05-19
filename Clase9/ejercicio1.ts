// 1. Mueblería: Actualización de Precios 
// En una mueblería, se requiere un sistema que permita actualizar los precios de 
// los muebles cada vez que cambien. Cada mueble tiene un nombre, un precio y 
// un identificador único. Implementa las siguientes funciones: 
// • Añadir un nuevo mueble. 
// • Actualizar el precio de un mueble después de 3 segundos utilizando 
// setTimeout(). 
// • Mostrar el inventario de muebles.

type Mueble = [number, string, number]

let inventario: Mueble[] = [];

function agregarMueble(id: number, nombre: string, precio: number){
    const nuevoMueble: Mueble = [id, nombre, precio]
    inventario.push(nuevoMueble);
    console.log('Se ha agregado el nuevo mueble con exito');
}

function actualizarPrecio(id: number, nuevoPrecio: number){
    setTimeout(() => {
        const mueble = inventario.find(m => m[0] === id)
        if(mueble){
            mueble[2] = nuevoPrecio
            console.log('Precio del mueble actualizado con exito');
        } else {
            console.log('El mueble no se encuentra dentro del inventario');
        }},
        3000);
}

function mostrarInventario(){
    console.log('El inventario de muebles disponible en tienda es:');
    console.log(inventario);    
}

agregarMueble(1, 'Mesa', 2000);
agregarMueble(2, 'Cama', 9000);
mostrarInventario();
actualizarPrecio(1, 3000);
