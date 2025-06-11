import {Router} from 'express'

const userRouter = Router()

//rutas
//Mostrar usuarios de la base de datos
userRouter.get('/', (req, res)=>{
    res.json({message: 'Obtener todos los usuarios'})
})

//Crear un usuario nuevo
userRouter.post('/', (req, res)=>{
    const {name, email} = req.body;
    res.status(201).json({message: 'Usuario creado', user: {name, email}})
})

//Buscar usuario por ID
userRouter.get('/:id', (req, res)=>{
    const {id} = req.params;
    res.json({message: `Usuario encontrado con id: ${id}`})
})

//Actualizar usuario
userRouter.put('/:id', (req, res)=>{
    const {id} = req.params;
    const {name, email} = req.body;
    res.json({message: `Usuario con id: ${id} actualizado`, user: {name, email}})
})

//Eliminar usuario
userRouter.delete('/:id', (req, res)=>{
    const {id} = req.params;
    res.json({message: `Usuario con id: ${id} eliiminado`})
})

export default userRouter;