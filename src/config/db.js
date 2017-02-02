var mongoose = require('mongoose');
var logger = require('./logger');

logger.info("[ Connecting with MongoDB... ]")

var db = mongoose.connect('mongodb://localhost/books', (err) => {
    err ?
        logger.error("Connection with MongoDB Failed" + err) :
        logger.info("Connection with MongoDB successful");
});

module.exports = db;