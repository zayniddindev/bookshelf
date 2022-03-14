const express = require("express");
const router = express.Router();

const { Book, Cart, Genre } = require("../controllers");

// Main Page
router.get('/', (req, res) => {
    res.send('<h1>Visit <a href="/books">/books</a> for more :)</h1>')
});

// Book
router.get('/books', Book.index);
router.post('/books', Book.create);
router.get('/books/:id', Book.show);

// Genre
router.get('/genres', Genre.index);
router.post('/genres', Genre.create);

// Cart
router.get('/cart', Cart.index)

module.exports = router;