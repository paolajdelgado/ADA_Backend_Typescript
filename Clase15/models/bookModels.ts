import fs from 'fs'
import path from 'path'

const filePath = path.join(__dirname, '../dataBase/books.json')
interface Book {
    id: string;
    titulo: string;
    autor: string;
    anio: number;
}

export class BookModels {
    static getAllBooks(): Book[] {
        const data = JSON.parse(fs.readFileSync(filePath, 'utf-8'))
        return data.Books
    }

    static getBooksById(id: string): Book | undefined {
        const data = this.getAllBooks()
        return data.find((book) => book.id === id)
    }

    static addBook(newBook: Book): Book {
        const data = JSON.parse(fs.readFileSync(filePath, 'utf-8'))
        const newId = (data.Books.length + 1).toString()
        const book = {...newBook, id: newId}

        data.Books.push(book)
        data.Inventario.total += 1
        fs.writeFileSync(filePath, JSON.stringify(data, null, 2))
        return book
    }

    static updateBook(id: string, updatedData: Partial <Book>): Book | null {
    const data = JSON.parse(fs.readFileSync(filePath, 'utf-8'))

    console.log('Datos leídos del JSON:', data); 
    
    console.log('Array de libros (data.Books):', data.Books); 
    const index = data.Books.findIndex((book: Book) => book.id === id)

    console.log('Índice encontrado:', index); 

    if (index === -1) return null
    if (!data.Books[index]) {
        console.error(`Error: El elemento en el índice ${index} es undefined. Contenido actual:`, data.Books);
        throw new Error(`Elemento de libro en el índice ${index} no es un objeto válido.`);
    }

    data.Books[index] = {...data.Books[index], ...updatedData} 
    fs.writeFileSync(filePath, JSON.stringify(data, null, 2))
    return data.Books[index]
}

    static deleteBook(id: string): boolean {
        const data = JSON.parse(fs.readFileSync(filePath, 'utf-8'))
        const index = data.Books.findIndex((book: Book) => book.id === id)
        if (index === -1) return false
        data.Books.splice(index, 1)
        data.Inventario.total -= 1
        fs.writeFileSync(filePath, JSON.stringify(data, null, 2))
        return true
    }

    static getBooksByAuthor(author: string): Book[] {
        const data = this.getAllBooks()
        return data.filter((book) => book.autor === author)
    }

}