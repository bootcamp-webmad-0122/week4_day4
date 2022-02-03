const router = require("express").Router()

const Book = require('./../models/Book.model')

// Books list 
router.get("/listado", (req, res, next) => {
  Book
    .find()
    .select('title')
    .then(books => res.render('books/list', { books }))
    .catch(err => console.log(err))
})


// Book details
router.get('/detalles/:book_id', (req, res) => {

  const { book_id } = req.params

  Book
    .findById(book_id)
    .then(book => res.render('books/details', book))
    .catch(err => console.log(err))
})


// Book form (render)
router.get('/crear', (req, res) => {
  res.render('books/create')
})


// Book form (handle)
router.post('/crear', (req, res) => {

  const { title, description, author, rating } = req.body

  Book
    .create({ title, description, author, rating })
    .then(() => res.redirect('/libros/listado'))
    .catch(err => console.log(err))
})

module.exports = router