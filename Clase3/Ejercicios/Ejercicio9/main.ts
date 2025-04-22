import { Person as Persona, createPerson as crearPersona } from "./types";

const persona : Persona = crearPersona("Paola", 29)

console.log(`Nueva persona agregada. Su nombre es ${persona.name} y tiene ${persona.age} años`);

