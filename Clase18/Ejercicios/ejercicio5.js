// Ejercicio 5: Manejo de errores en rutas 
// 1. Objetivo: Implementar respuestas para rutas no encontradas. 
// 2. Instrucciones: 
// o Si el usuario intenta acceder a una ruta que no existe, responde con 
// un error 404 y el mensaje { error: "Ruta no encontrada." }. 
// 3. Pasos para probar con Postman: 
// o Intenta acceder a una ruta inexistente, como 
// http://localhost:3000/invalid. 
// o Verifica que el servidor responda con el error 404.

const express = require('express');
const app = express();
app.use(express.json());

app.get('/', (req, res) =>{
    res.status(200).json({message: 'Bienvenidas!'})
})

app.use((req, res) =>{
    res.status(404).json({error: 'Ruta invalida'})
})

app.listen(3000, ()=>{
    console.log('Servidor escuchando en http://localhost:3000');
})
