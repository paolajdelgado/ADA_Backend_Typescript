// Ejercicio 1: Abstracción Básica - Ejemplo del Mundo Real 
// Modela un sistema de cafetería. Crea una interfaz Bebida que defina un método 
// preparar(). Implementa esta interfaz en dos clases: Cafe y Te. Usa abstracción 
// para que ambas bebidas oculten su lógica de preparación interna pero 
// expongan un comportamiento común.

interface Bebida {
    preparar(): void;
}

class Cafe implements Bebida{
    preparar(): void {
        console.log('Preparando café: una cuchara de mezcla soluble y una taza de agua caliente, revolver hasta disolver mezcla.');
    }
}

class Te implements Bebida{
    preparar(): void {
        console.log('Preparando té: colocar sobre dentro de una taza de agua caliente. Esperar 2 minutos a que se complete la infusión.');
    }
}

let cafe1 = new Cafe();
cafe1.preparar();

let te1 = new Te();
te1.preparar();

