//Importaciones
const express = require('express');
const cors = require('cors');
const jwt = require('jsonwebtoken');
const {z} = require('zod');
require('dotenv').config();

//Instancia
const app = express()
app.use(cors()); //acceder desde os origenes
app.use(express.json()) //lee json en los request

//middleware => registrar todas las solicitudes
app.use((req, res, next) =>{
    console.log(`${req.method} ${req.url}`);
    next()
})

//Datos simulados
const user = {email: 'ada@lovelace.com', password: '1234'}
const productos = []

//Middleware para proteger las rutas con JWT
function auth(req, res, next) {
    const token = req.headers.authorization
    if(!token) return res.status(401).json({error: 'Token requerido'})

    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET) //Verifica el token y la variable de entorno
        req.user = decoded //guardamos el mail decodificado
        next()
    } catch {
        res.status(403).json({error: 'Token invalido'})
    }
}


//Esquema ZOD
const producoSchema = z.object({
    name: z.string().min(2),
    price: z.number().positive(),
})

//Ruta publica para el login
app.post('/login', (req, res) =>{
    const {email, password} = req.body
    if(email === user.email && password === user.password){
        const token = jwt.sign({email}, process.env.JWT_SECRET, {expiresIn: '1h'})
        res.json({token})
    } else {
        res.status(401).json({error: 'Credencial invalida'})
    }
})

//Ruta protegida para obtener productos
app.get('/productos', auth, (req, res) =>{
    res.json(productos)
})

//Ruta protegida para agregar productos validados
app.post('/productos', auth, (req, res) =>{
    try{
        const nuevoProducto = producoSchema.parse(req.body) //validando con zod
        productos.push(nuevoProducto)
        res.status(201).json('Nuevo producto creado: ', nuevoProducto)
    } catch (err) {
        res.status(400).json({error: err.errors})
    }
})

//Inicializar servidor
app.listen(3000, ()=>{
    console.log('Servidor corriendo http://localhost:3000');
})