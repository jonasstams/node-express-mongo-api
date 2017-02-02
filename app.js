var express = require('express'),
    app = express(),
    bodyParser = require('body-parser'),
    logger = require('./src/config/logger'),
    routes = require('./src/config/routes'),
    Book = require('./src/model/books');

app.use(bodyParser.urlencoded({
    extended: true
}));

app.use(bodyParser.json());

app.use('/', routes);

app.listen(3005, () => {
    logger.info("API started on http://localhost:3005");
});

