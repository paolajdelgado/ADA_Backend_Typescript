// Ejercicio 4: CRUD básico (solo parte inicial) 
// 1. Objetivo: Implementar las rutas iniciales de un CRUD para gestionar 
// usuarios. 
// 2. Instrucciones: 

//Instalar modulos
const express = require('express')
const app = express();
app.use(express.json())

// o Define las siguientes rutas: 
// ▪ GET /users: Responde con una lista de usuarios (puede ser un 
// array estático). 

//array inicial
const database = [
    {
        "id": 1,
        "name": "Paola",
        "email": "paola@example.com"
    }
]

app.get('/users', (req, res) =>{
    res.json(database)
})

// ▪ POST /users: Recibe un JSON con id, name y email, y responde 
// con { message: "Usuario creado", user: [datos del usuario] }. 
app.post('/users', (req, res) =>{
    const {name, email} = req.body
    database.push({id: database.length + 1, name, email})
    res.status(201).json({message: 'Usuario creado', user: name, email})
})

app.listen(3000, ()=>{
    console.log('Servidor escuchando en http://localhost:3000');
})
// 3. Pasos para probar con Postman: 
// o Haz una solicitud GET a /users para obtener la lista de usuarios.
// o Haz una solicitud POST a /users enviando un JSON como: 
// { 
// "id": 1, 
// "name": "Ana", 
// "email": "ana@example.com" 
// } 
// Verifica que la respuesta incluya el mensaje y los datos enviados. 