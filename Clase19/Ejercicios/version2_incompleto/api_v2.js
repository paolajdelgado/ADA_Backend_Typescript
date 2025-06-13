//Importar modulos
const express = require('express')
const fs = require('fs')
const app = express()
app.use(express.json())


//*******EJERCICIO 3 */
// Consigna: 
// 1. Implementa un middleware para registrar en la consola cada 
// solicitud recibida con su método y URL. 
// 2. Úsalo en la API para registrar todas las solicitudes.
// Middleware para registrar solicitudes
const registroSolicitudes = (req, res, next) => {
    console.log(`[${new Date().toISOString()}] ${req.method} ${req.url}`);
    next(); 
};

// Usar el middleware en la API
app.use(registroSolicitudes);


//*********EJERCICIO 1
// Define un endpoint GET en la ruta /api/message que devuelva un 
// mensaje JSON como respuesta. 
app.get('/api/message', (req, res) =>{
    res.status(200).json({message: 'Bienvenida a la api!'})
})


//********EJERCICIO 2 
// 1. Usa la misma estructura de proyecto para implementar operaciones 
// CRUD en una colección de "usuarios". 
// 2. Define los siguientes endpoints: 
// o GET /api/users para obtener todos los usuarios. 
// o POST /api/users para crear un nuevo usuario. 
// o PUT /api/users/:id para actualizar un usuario por ID. 
// o DELETE /api/users/:id para eliminar un usuario por ID. 

const databasePath = './database.json'

app.get('/api/users', (req, res) =>{
    const usuarios = JSON.parse(fs.readFileSync(databasePath))
    res.status(200).json(usuarios)
})

app.post('/api/users', (req, res) =>{
    const {name, email} = req.body;
    const usuarios = JSON.parse(fs.readFileSync(databasePath))
    usuarios.push({id: usuarios.length + 1, name: name, email: email})
    fs.writeFileSync(databasePath, JSON.stringify(usuarios, null, 2))
    res.status(201).json({message: 'Usuario creado con exito!'})
})

app.put('/api/users/:id', (req, res) =>{
    const {id} = req.params
    const {name, email} = req.body
    const usuarios = JSON.parse(fs.readFileSync(databasePath))
    const userIndex = usuarios.findIndex(u => u.id === parseInt(id))

    if(!name && !email){
        res.status(400).json({error: 'Campos faltantes para la solicitud'})
    } else if (!email){
        usuarios[userIndex].name = name
        fs.writeFileSync(databasePath, JSON.stringify(usuarios, null, 2))
        res.status(200).json({message: "Nombre de usuario actualizado con exito"})
    } else if(!name){
        usuarios[userIndex].email = email
        fs.writeFileSync(databasePath, JSON.stringify(usuarios, null, 2))
        res.status(200).json({message: "Email de usuario actualizado con exito"})
    } else {
        usuarios[userIndex].name = name
        usuarios[userIndex].email = email
        fs.writeFileSync(databasePath, JSON.stringify(usuarios, null, 2))
        res.status(200).json({message: "Usuario actualizado con exito"})
    }
})

app.delete('/api/users/:id', (req, res) =>{
    const {id} = req.params
    const usuarios = JSON.parse(fs.readFileSync(databasePath))
    const userIndex = usuarios.findIndex(u => u.id === parseInt(id))
    usuarios.splice(userIndex, 1)
    fs.writeFileSync(databasePath, JSON.stringify(usuarios, null, 2))
    res.status(200).json({message: 'Ususario eliminado con exito'})
})

//*******EJERCICIO 5 */
// Actividad 5: Autenticación Básica con Middleware Personalizado 
// Consigna: 
// 1. Implementa un middleware personalizado que verifique si la 
// solicitud incluye un encabezado Authorization con un token válido. 
// 2. Si el token no es válido o falta, responde con un error 401. 
// 3. Aplica el middleware a una ruta protegida /api/secure-data que 
// devuelva datos confidenciales. 




//Iniciar servidor
app.listen(3000, ()=>{
    console.log('Servidor conectado en http://localhost:3000');
})

