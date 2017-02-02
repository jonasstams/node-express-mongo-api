## Synopsis

This project is a simple project to start programming with. It's an API in NodeJS with Express and MongoDB (ECMAscript 6). The API also has a good logging system.


## Motivation

I made this project for myself to always have a starting API.

## Response Example
###### GET /books
```json
{
    "success": true,
    "book": {
        "_id": "5893524e572c9764d733f946",
        "title": "Web Development Book",
        "author": "Harry Smitzer",
        "ISBN": "1234567890",
        "__v": 0,
        "date": "2017-02-02T15:37:50.093Z"
    }
}
```
## Log Example
###### The console output is also saved in the file **console.log**
```
[2017-02-02 18:48:05.606] [INFO] API - [ Connecting with MongoDB... ]
[2017-02-02 18:48:05.673] [INFO] API - API started on http://localhost:3005
[2017-02-02 18:48:05.700] [INFO] API - Connection with MongoDB successful
[2017-02-02 18:48:12.692] [INFO] API - [ Router triggered: GET /books/5893524e572c9764d733f946 ]
[2017-02-02 18:48:12.694] [INFO] API - [ Searching for book with _id: 5893524e572c9764d733f946 ]
[2017-02-02 18:48:12.719] [INFO] API - Found book with _id: 5893524e572c9764d733f946.
[2017-02-02 18:48:17.739] [INFO] API - [ Router triggered: GET /books ]
[2017-02-02 18:48:17.740] [INFO] API - [ Searching for books ]
[2017-02-02 18:48:17.746] [INFO] API - Found 6 books.
```


## Used Packages

- Express
- Mongoose
- Body-parser
- Log4j

## Pre-Installation

- [Node Package Manager (NPM)](https://www.npmjs.com/package/npm)
- [MongoDb](https://www.mongodb.com/download-center#community)

## Installation

```
- mongod        //Start mongo server
- npm install   //Install node packages
- npm start     //Start API

//Maybe you have to change the JavaScript language to ECMAscript 6 in your Editor
```

## API Reference


#####Get all Books
```
GET
http://localhost:3005/books
```
#####Get a Book by _id
```
GET
http://localhost:3005/books/{id}
```
#####Add a Book
```
POST
http://localhost:3005/books
```
######Request example
```
{
    "title" : "A super nice book",
    "author" : "Jonas Stams",
    "isbn" : "1234567890"
}
```
#####Update a Book
```
PUT
http://localhost:3005/books/{id}
```
######Request example
```
{
    "title" : "New title",
    "author" : "New author"
}
```
#####Delete a Book
```
DELETE
http://localhost:3005/books/{id}
```

## Tests

I didn't implement a test library yet. (Coming soon)

