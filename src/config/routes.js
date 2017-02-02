var router = require('express').Router();
var logger = require('./logger');

router.use((req, res, next) => {
    if(req.url != '/favicon.ico'){
        logger.info('[ Router triggered: ' + req.method + " " + req.url + ' ]');
        next();
    }
});


router.use('/books', require('./../controller/BookController'));

router.get('*', (req, res) => {
    logger.warn("Requested URL without route");
    res.json({
        success: false,
        message: 'No route provided for this URL'
    });
});

module.exports = router;