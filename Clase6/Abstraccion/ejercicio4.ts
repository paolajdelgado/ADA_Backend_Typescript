// Ejercicio 4: Comparación - Clases Abstractas vs Interfaces 
// Crea una interfaz PagoOnline con un método procesarPago(). 
// Crea una clase abstracta Pago con un método concreto validarMonto() y un 
// método abstracto completarPago(). 
// Implementa ambas estructuras en una clase concreta PagoConTarjeta. 

interface PagoOnline{
    procesarPago(): void;
}

abstract class Pago implements PagoOnline{
    procesarPago(): void {
        console.log('Procesando pago en linea');
    }

    validarMonto(): void{};

    abstract completarPago(): void;
}

class PagoConTarjeta extends Pago{

    validarMonto(): void {
        console.log('El monto a pagar es de $700');
    }

    completarPago(): void {
        super.procesarPago();
        console.log('Transaccion exitosa!');
    }
}

let pago1 = new PagoConTarjeta();
pago1.validarMonto();
pago1.completarPago();