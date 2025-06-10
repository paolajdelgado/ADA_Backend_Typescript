//Importar modulos
const express = require('express');
const fs = require('fs');

//Inicializar la app
const app = express();
const PORT = 3000;
app.use(express.json());
const databasePath = './database.json'

app.get('/products', (req, res) =>{
    const database = JSON.parse(fs.readFileSync(databasePath))
    res.status(200).json(database)
})

app.post('/add', (req, res) =>{
    const {id, name} = req.body;

    if(!id || !name){
        return res.status(400).json({error: 'El usuario no ingreso los campos requeridos'})
    }


    const database = JSON.parse(fs.readFileSync(databasePath))
    const newProduct = {id, name}
    database.push(newProduct)
    fs.writeFileSync(databasePath, JSON.stringify(database, null, 2))
    res.status(201).json({message: 'Producto añadido con exito'})
})

app.listen(PORT, () =>{
    console.log(`Servidor escuchando en http://localhost:${PORT}`);
})