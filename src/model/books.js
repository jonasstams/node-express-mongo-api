const db = require('../config/db');

const Book = db.model('Book', {
    title: {type: String, required: true},
    author: {type: String, required: true},
    ISBN: {type: String, required: true},
    date: {type: Date, required: true, default: Date.now}
});

module.exports = Book;