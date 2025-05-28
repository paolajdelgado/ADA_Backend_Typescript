import { Request, Response } from "express";
import {BookModels} from '../models/bookModels'

export const getAllBooks = (req: Request, res: Response): void => {
    try{
        const books = BookModels.getAllBooks()
        res.status(200).json(books)
    } catch(error){
        console.error("Error al mostrar los libros:", error);
        res.status(500).json({error: "Ocurrió un error en el servidor"});
    }
    
}

export const getBooksById = (req: Request, res: Response): void => {
    try{
        const {id} = req.params
        const book = BookModels.getBooksById(id)
        if (!book) {
            res.status(404).json({error: "Libro no encontrado"})
            return
        }
        res.status(200).json(book)
    } catch (error){
        console.log('Error al buscar un libro por ID: ', error);
        res.status(500).json({error: "Ocurrio un error en el servidor"})
    }
}

export const createBook = (req: Request, res: Response): void => {
    try{
        const newBook = BookModels.addBook(req.body)
        res.status(201).json(newBook)
    } catch(error){
        console.log('Error al crear un nuevo libro: ', error);
        res.status(500).json({error: "Ocurrio un error en el servidor"})
    }
    
}

export const updateBook = (req: Request, res: Response): void => {
    try {
        const {id} = req.params;
        const updatedData = req.body; 

        const updatedBook = BookModels.updateBook(id, updatedData); 

        if (!updatedBook) {
            res.status(404).json({error: "Libro no encontrado"});
            return; 
        }
    
        res.status(200).json(updatedBook);
    } catch (error) {
        console.error("Error al actualizar el libro:", error);
        res.status(500).json({error: "Ocurrió un error en el servidor"});
    }
};

export const deleteBook = (req: Request, res: Response): void => {
    try{
        const {id} = req.params
        const isDeleted = BookModels.deleteBook(id)
        if (!isDeleted) {
            res.status(404).json({error: "No se encontró el libro a eliminar."})
            return
        }
        res.status(204).send()
    } catch(error) {
        console.error("Error al eliminar un libro:", error);
        res.status(500).json({error: "Ocurrió un error en el servidor"});
    }
};

export const getBooksByAuthor = (req: Request, res: Response): void => {
    try {
        const { author } = req.params;
        const books = BookModels.getBooksByAuthor(author);

        if (!books || books.length === 0) {
            res.status(404).json({ error: "No se encontraron libros para este autor" });
            return;
        }

        res.status(200).json(books);
    } catch (error) {
        console.error("Error al buscar un libro por autor:", error);
        res.status(500).json({error: "Ocurrió un error en el servidor"});
    }
    
};
