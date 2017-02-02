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


## Used Packages

- express
- mongoose
- body-parser
- log4j

## Installation

```
- npm install
- npm start
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
