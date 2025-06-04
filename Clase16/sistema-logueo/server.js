//Importar modulos
const express = require('express');
const bodyParser = require('body-parser');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const fs = require('fs');
const { log } = require('console');

//Inicializar la app
const app = express();
const PORT = 3000;

//Usar body-parser para procesar datos JSON
app.use(bodyParser.json());

//Leer datos de usuarios desde un archivo JSON simulado (base de datos)
const databasePath = './database.json';

//Cargar variable de entorno para la clave secreta del token
require('dotenv').config();
const SECRET_KEY = process.env.SECRET_KEY || 'claveSecreta123'; //Clave secreta para JWT

//Ruta base
app.get('/', (req, res) =>{
    res.send('Bienvenidas al sistema de logueo!');
});

//Inicial el servidor
app.listen(PORT, ()=>{
    console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
