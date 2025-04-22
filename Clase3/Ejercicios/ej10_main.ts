import {
    add,
    subtract,
    capitalize,
    reverse,
    createUser
} from './utils/ej10_index'


const edad2020 = 25;
const edad2025 = 5;

const edadActual = add(edad2020, edad2025); 
const formatoNombre = capitalize('paola');

const usuario = createUser(formatoNombre, edadActual);

console.log(`Usuario creado: ${usuario.name}, Edad: ${usuario.age}`);