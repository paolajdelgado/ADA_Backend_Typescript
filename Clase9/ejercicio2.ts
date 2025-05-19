// 2. Florería: Envío Programado de Pedidos 
// Crea un sistema que gestione el envío de pedidos de flores. Cada pedido debe 
// contener el nombre del cliente, la cantidad de flores y el tipo de flores. 
// Implementa las siguientes funciones: 
// • Añadir un pedido. 
// • Programar el envío de un pedido utilizando setTimeout() para simular un 
// retraso de 5 segundos. 
// • Mostrar todos los pedidos pendientes.

type pedido = [number, string, number, string, boolean]
export let inventario: pedido[] = []

function agregarPedido(id: number, cliente: string, cantidad: number, tipo: string){
    const nuevoPedido: pedido = [id, cliente, cantidad, tipo, false]
    inventario.push(nuevoPedido);
    console.log('Nuevo pedido agregado con exito');
}

function programarEnvio(id:number){
    setTimeout(() => {
        const pedido = inventario.find(p => p[0] === id)
        if(pedido){
            pedido[4] = true
            console.log(`El envío ha sido programado para el pedido de ${pedido[1]}`);
        } else{
            console.log('Pedido no encontrado');
        }
    },
        5000);
}

function mostrarPedidosPendientes(){
    const pedidosPendientes = inventario.filter(pedido => !pedido[4]); 
    if (pedidosPendientes.length > 0) {
        console.log("Pedidos con envío pendiente:");
        pedidosPendientes.forEach(pedido => {
            console.log(`ID: ${pedido[0]}, Cliente: ${pedido[1]}, Cantidad: ${pedido[2]}, Tipo: ${pedido[3]}`);
        });
    } else {
        console.log("No hay pedidos pendientes de envío.");
    }
}

agregarPedido(1, "Paola", 24, "Rosas");
agregarPedido(2, "Irma", 12, "Tulipanes");
agregarPedido(3, "Alejandra", 24, "Temporada");
programarEnvio(1);
mostrarPedidosPendientes();
