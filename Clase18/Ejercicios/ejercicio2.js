// Ejercicio 2: Ruta con parámetros dinámicos 
// 1. Objetivo: Crear una ruta que utilice parámetros de la URL. 
// 2. Instrucciones: 
// o Define la ruta GET /greet/:name que reciba un parámetro name en la 
// URL y responda con un mensaje como: { message: "Hola, [nombre]!" 
// }. 
// 3. Pasos para probar con Postman: 
// o Haz una solicitud GET a http://localhost:3000/greet/Ana y verifica 
// que la respuesta sea: { message: "Hola, Ana!" }. 
// o Cambia el parámetro en la URL (por ejemplo, /greet/Juan) y prueba.

const express = require('express')
const app = express()
app.use(express.json())

app.get('/greet/:name', (req, res) =>{
    const {name} = req.params;
    res.status(200).json({message: `Hola, ${name}!`}) 
})

app.listen(3000, () =>{
    console.log('Servidor escuchando en http://localhost:3000');
})