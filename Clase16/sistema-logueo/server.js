//Importar modulos
const express = require('express');
//const bodyParser = require('body-parser');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const fs = require('fs');

//Inicializar la app
const app = express();
const PORT = 3000;

//middleware para parsear JSON
app.use(express.json());

//Leer datos de usuarios desde un archivo JSON simulado (base de datos)
const databasePath = './database.json';

//Cargar variable de entorno para la clave secreta del token
require('dotenv').config();
const SECRET_KEY = process.env.SECRET_KEY || 'claveSecreta123'; //Clave secreta para JWT

//Ruta base
app.get('/', (req, res) =>{
    res.send('Bienvenidas al sistema de logueo!');
});

//Ruta para registrar nuevo usuarios
app.post('/register', async(req, res) => {
    const {email, password} = req.body //estraemos el mail y contrasena del cuerpo de la solicitud

    //condicional para verificar que los campos no estan vacios
    if(!email || !password){
        return res.status(400).json({error: 'El usuario no ingreso los campos requeridos'})
    }

    //leer bd para verificar que el usuario existe
    const database = JSON.parse(fs.readFileSync(databasePath))
    const userExists = database.find((user) => user.email === email)
    if(userExists) {
        return res.status(400).json({error: 'El usuario ya esta registrado'})
    }

    //hashing de la contrasena donde el numero 10 es el coste del algoritmos
    const hashedPasword = await bcrypt.hash(password, 10)

    //creamos nuevo usuario
    const newUser = {id: Date.now(), email, password: hashedPasword}

    //Guardamos el usuario nuevo
    database.push(newUser)
    fs.writeFileSync(databasePath, JSON.stringify(database, null, 2))

    //Confirmar registro exitoso
    res.status(201).json({message: 'Usuario registrado con exito!'})
})

//ruta para iniciar sesion
app.post('/login', async(req, res) => {
    const {email, password} = req.body

    if(!email || !password){
        return res.status(400).json({error: 'El usuario no ingreso los campos requeridos'})
    }

    //leer base de datos para buscar el usuario
    const database = JSON.parse(fs.readFileSync(databasePath))
    const user = database.find((user) => user.email === email)
    if(!user) {
        return res.status(400).json({error: 'Usuario no encontrado'})
    }

    //Comparamos contrasena (ingresada y haseada)
    const isPasswordValid = await bcrypt.compare(password, user.password)
    if(!isPasswordValid){
        return res.status(401).json({error: 'Contrasena incorrecta'})
    }

    //generamos un JTW (token)
    const token = jwt.sign({id: user.id, email: user.email}, SECRET_KEY,{
        expiresIn: '1h',
    })

    res.json({message: 'Inicio de sesion exitoso', token})
})


//middleware para verificar el token
function autenticacionToken(req, res, next) {
    const authHeader = req.headers['authorization']
    const token = authHeader && authHeader.split(' ')[1] //con esto extraemos el token

    //condicional para verificar que el token existe
    if(!token){
        return res.status(401).json({error: 'Token no proporcionado'})
    }

    jwt.verify(token, SECRET_KEY, (err, user) =>{
        if(err){
            return res.status(403).json({error: 'Token invalido'})
        }
        req.user = user //guardamos los datos del user
        next()
    })
}

//ruta protegida 
app.get('/profile', autenticacionToken, (req, res) =>{
    res.json({message: `Bienvenida ${req.user.email}`, user: req.user})
})

//Inicial el servidor
app.listen(PORT, ()=>{
    console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
