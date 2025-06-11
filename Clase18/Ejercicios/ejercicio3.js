// Ejercicio 3: Validación de datos 
// 1. Objetivo: Validar datos enviados a través de POST. 
// 2. Instrucciones: 

//inicializar servidor e importar modulos
const express = require('express')
const app = express()
app.use(express.json())

// o Crea la ruta POST /register. 
app.post('/register', (req, res) =>{
    // o Recibe un JSON con los campos username y password. 
    const {username, password} = req.body

    // o Si alguno de los campos está vacío, responde con un error 400 y el 
    // mensaje { error: "Todos los campos son obligatorios." }. 
    if(!username || !password){
        res.status(400).json({error: 'Todos los campos son obligatorios.'})
    }

    // o Si los datos son válidos, responde con: { message: "Usuario 
    // registrado con éxito!" }.
    res.status(201).json({message: 'Usuario registrado con exito!'})

})

app.listen(3000, ()=>{
    console.log('Servidor escuchando en http://localhost:3000');
})

// 3. Pasos para probar con Postman: 
// o Envía un body válido: 
// { 
// "username": "usuario1", 
// "password": "123456" 
// } 
// Verifica que el servidor responda correctamente. 
// o Envía un body con un campo vacío y verifica el error.