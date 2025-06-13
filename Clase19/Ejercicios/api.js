//Importar modulos
const express = require('express');
const jwt = require('jsonwebtoken');
const app = express();
app.use(express.json());


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

const usuarios = []

app.get('/api/users', (req, res) =>{
    res.status(200).json(usuarios)
})

app.post('/api/users', (req, res) =>{
    const {name} = req.body;
    usuarios.push({id: usuarios.length + 1, name: name})
    res.status(201).json({message: 'Usuario creado con exito!'})
})

app.put('/api/users/:id', (req, res) =>{
    const {id} = req.params
    const {name} = req.body
    const userIndex = usuarios.findIndex(u => u.id === parseInt(id))
    usuarios[userIndex].name = name
    res.status(200).json({message: "Usuario actualizado con exito"})
})

app.delete('/api/users/:id', (req, res) =>{
    const {id} = req.params
    const userIndex = usuarios.findIndex(u => u.id === parseInt(id))
    usuarios.splice(userIndex, 1)
    res.status(200).json({message: 'Ususario eliminado con exito'})
})

//*******EJERCICIO 5 */
// Actividad 5: Autenticación Básica con Middleware Personalizado 
// Consigna: 
// 1. Implementa un middleware personalizado que verifique si la 
// solicitud incluye un encabezado [header] Authorization con un token válido. 
// 2. Si el token no es válido o falta, responde con un error 401. 
// 3. Aplica el middleware a una ruta protegida /api/secure-data que 
// devuelva datos confidenciales. 

// Clave secreta
SECRET_KEY = 'clave_ultra_secreta'

// middleware para validar el token
function verifyToken(req, res, next) {
    const authHeader = req.headers['authorization'] // los tokens suelen enviarse con el header de autorizacion
    const token = authHeader && authHeader.split(' ')[1] // si existe el header, que extraiga el token

    if (!token) {
        return res.status(401).json({ message: 'Token no ingresado' })
    }

    try {
        const decoded = jwt.verify(token, SECRET_KEY)
        req.user = decoded // se agrega la info del usuario objeto de la soli
        next()
    } catch (err) {
        res.status(401).json({ message: 'Token invalido o expirado' })
    }
}

// Rutas para generar un token
// Ruta simple para obtener usuario
app.get('/api/login/:id', (req, res) => {
    const {id} = req.params;
    const user = usuarios.find(u => u.id === parseInt(id))

    // creamos el token
    const token = jwt.sign({id: user.id, name: user.name}, SECRET_KEY, { expiresIn: '1h' })
    // inicio de sesion
    res.json({
        message: 'Inicio de sesion exitoso',
        token: token,
    })
})

// ruta protegida 
app.get('/api/secure-data', verifyToken, (req, res) => {
    // un mensaje de informacion y info del usuario
    res.json({
        message: 'Acceso concedido a ruta protegida ',
        user: req.user,
    })
})


//Iniciar servidor
app.listen(3000, ()=>{
    console.log('Servidor conectado en http://localhost:3000');
})

