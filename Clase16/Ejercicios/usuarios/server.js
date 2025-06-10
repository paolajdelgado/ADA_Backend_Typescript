//Importar modulos
const express = require('express');
const fs = require('fs');

//Inicializar la app
const app = express();
const PORT = 3000;
app.use(express.json());

//Ruta de la base de datos
const databasePath = './database.json';

//Obtener usuarios
app.get('/users', (req, res) =>{
    const database = JSON.parse(fs.readFileSync(databasePath))
    res.status(200).json(database)
});

//Agregar usuario
app.post('/register', (req, res) => {
    const {name} = req.body;

    if(!name){
        return res.status(400).json({error: 'El usuario no ingreso el campo de "Nombre"'})
    }

    const database = JSON.parse(fs.readFileSync(databasePath))
    const ultimoId = database.length > 0 ? database[database.length - 1].id : 0;
    const newUser = {id: ultimoId + 1, name}
    database.push(newUser)
    fs.writeFileSync(databasePath, JSON.stringify(database, null, 2))
    res.status(201).json({message: 'Usuario registrado con exito!'})
});

app.patch('/users/:id', (req, res) =>{
    const userID = parseInt(req.params.id)
    const {name} = req.body; //datos proporcionados mediante la interfaz

    const database = JSON.parse(fs.readFileSync(databasePath)) //leer database
    
    //Encontrar usuario por ID
    const userIndex = database.findIndex(u => u.id === userID);
    if (userIndex === -1) {
        return res.status(404).json({ error: 'Usuario no encontrado' });
    }

    //Actualizar usuario
    database[userIndex].name = name;
    fs.writeFileSync(databasePath, JSON.stringify(database, null, 2)); // Guardar cambios
    res.status(200).json({ message: 'Usuario actualizado con éxito', user: database[userIndex] });
})

app.delete('/users/:id', (req, res) =>{
    const userID = parseInt(req.params.id)
    const database = JSON.parse(fs.readFileSync(databasePath, 'utf-8')) //leer database

    //Encontrar usuario por ID
    const userIndex = database.findIndex(u => u.id === userID);
    if (userIndex === -1) {
        return res.status(404).json({ error: 'Usuario no encontrado' });
    }

    //Eliminar usuario
    database.splice(userIndex, 1)
    fs.writeFileSync(databasePath, JSON.stringify(database, null, 2)); // Guardar cambios
    res.status(200).json({ message: 'Usuario eliminado con éxito' });
})


app.listen(PORT, () =>{
    console.log(`Servidor escuchando en http://localhost:${PORT}`);
})
