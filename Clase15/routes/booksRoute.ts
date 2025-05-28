import {Router} from 'express'

import {
    getAllBooks,
    getBooksById,
    createBook,
    updateBook,
    deleteBook,
    getBooksByAuthor
} from '../Controllers/booksControllers'

import {validateBook} from '../middlewares/validate-middleware'

const router: Router = Router()

router.get('/', getAllBooks)
router.get('/:id', getBooksById)
router.post('/', validateBook, createBook)
router.patch('/:id', updateBook)
router.delete('/:id', deleteBook)
router.get('/author/:author', getBooksByAuthor)

export default router