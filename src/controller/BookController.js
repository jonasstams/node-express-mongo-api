const router = require('express').Router(),
    logger = require('./../config/logger'),
    Book = require('./../model/books');

router.get('/', (req, res) => {                                     // Route to get all Books

    logger.info("[ Searching for books ]");

    Book.find((err, books) => {
        if(err){
            logger.error(err);
            res.status(400).json({success: false});                 // Send status 400 (BAD REQUEST)
        }
        if(books){
            logger.info("Found " +  books.length + " books.");
            res.status(200).json({success: true, books});            // Send the books
        }else{

        }
    })
});

router.get('/:id', (req, res) =>{                                    // Route to get a book by its id

    logger.info("[ Searching for book with _id: " + req.params.id + ' ]');

    Book.findOne({ '_id' : req.params.id}, (err, book) =>{
        if(err){
            logger.error(err);
            res.status(400).json({success: false});                 // Send status 400 (BAD REQUEST)
        }
        if(book){
            logger.info("Successfully found book.");
            res.status(200).json({success: true, book});            // Send the book
        }
    });

});

router.post('/', (req, res) => {                                    // Route to post and create a book

    logger.info("[ Trying to add a book ]");

    if (req.body) {

        const book = new Book({                                          // Create a new Book object from the Mongo model
            title: req.body.title,
            author: req.body.author,
            ISBN: req.body.ISBN
        });

        book.save((err, book) => {                                      // Save the book to Mongo
            if(err){
                logger.error('Book.save', err);
                res.status(400).json({success: false});                 // Send status 400 (BAD REQUEST)
            }else{
                logger.info("Successfully saved Book:", book );
                res.status(201).json({success: true, book});            // Send the book back
            }
        });

    }
    else {
        res.status(400).json({success: false, message: 'Please add a body to your request.'});
    }

});

router.delete('/:id', (req, res) => {                                    // Route to delete a book by its id

    logger.info("[ Trying to delete Book with _id: " + req.params.id + " ]");

    Book.remove({_id: req.params.id}, (err, removed) => {
        if(err){
            logger.error(err);
            res.status(400).json({success: false});
        }

        if(removed){
            logger.info("Successfully deleted Book with _id: " + req.params.id);
            res.status(200).json({success: true});
        }
    });

});

router.put('/:id', (req, res) => {                                      // Route to update a book by its id

    logger.info("[ Trying to update Book with _id: " + req.params.id + " ]");

    Book.findOne({ '_id' : req.params.id }, (err, book) => {
        if (err) {
            logger.error(err);
            res.status(400).json({success: false, message: err});
        } else {
            book.author = req.body.author ? req.body.author : book.author;
            book.title = req.body.title ? req.body.title : book.title;
            book.ISBN = req.body.isbn ? req.body.isbn : book.ISBN;


            book.save((err, book) => {
                if(err){
                    logger.error(err);
                    res.status(400).json({success: false});
                }

                logger.info("Successfully updated Book with _id: " + book._id);
                res.status(200).json({success: true, book});
            });
        }
    });
});


module.exports = router;