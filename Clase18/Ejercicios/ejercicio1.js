// Ejercicio 1: Rutas GET y POST simples 
// 1. Objetivo: Crear un servidor con Node.js que maneje rutas GET y POST 
// básicas. 
// 2. Instrucciones: 
// o Crea un servidor usando express. 

const express = require('express');
const app = express();
app.use(express.json());

// o Define las siguientes rutas: 
// ▪ GET /hello: Responde con un mensaje JSON que diga: { 
// message: "Hola, mundo!" }. 

app.get('/hello', (req, res) =>{
    return res.json('Hola, mundo!')
})
// ▪ POST /hello: Recibe un JSON con un campo name y responde 
// con: { message: "Hola, [nombre]!" }, donde [nombre] es el valor 
// enviado. 

app.post('/hello', (req, res) =>{
    const {name} = req.body;
    res.status(200).json({message: `Hola, ${name}`})
    return
})

const PORT = 3000

app.listen(PORT, () =>{
    console.log(`Servidor escuchando en http://localhost:${PORT}`);
    
})

// 3. Pasos para probar con Postman: 
// o Haz una solicitud GET a http://localhost:3000/hello y verifica la 
// respuesta. 
// o Haz una solicitud POST a http://localhost:3000/hello enviando un 
// body como: 
// { 
// } 
// "name": "Ana" 
// Verifica que el servidor responda con: { message: "Hola, Ana!" }. 