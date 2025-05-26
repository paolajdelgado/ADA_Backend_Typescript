// Ejercicio 2: Crear un Endpoint POST para agregar usuarios 
// Consigna: Ahora vamos a permitir que el cliente agregue nuevos usuarios a la 
// lista. Tu tarea es crear un endpoint POST que reciba los datos del usuario desde 
// el cuerpo de la solicitud en formato JSON. Los datos deben incluir name y email. 
// Si alguno de estos datos falta, el servidor debe responder con un error (código 
// 400). 
// Recuerda usar express.json() como middleware para procesar los datos del 
// cuerpo de la solicitud. 

const express  = require('express');
const app = express();

app.use(express.json());
let users = [];

app.post('/users', (req, res)=>{
    const {name, email} = req.body;

    if (!name || !email) {
        return res.status(400).send('Error. Faltan datos para procesar la solicitud. Intente de nuevo.');
    }

    // Agregamos el nuevo usuario a la lista
    users.push({ name, email });

    // Respondemos con un mensaje de éxito y la lista actualizada de usuarios
    res.status(201).json({ message: 'Usuario agregado con exito', users });
})

app.listen(3000, ()=> {
    console.log('Servidor escuchando en http://localhost:3000')
})