# Software Architecture Assigment 1
#### Group: Old Man with Backache
--------
**1- Screenshots of Swagger for your APIs in 2.**

<img src='/Resources/Swagger_List.PNG'>
<img src='/Resources/Swagger_Get.PNG'>
<img src='/Resources/Swagger_Insert.PNG'>
<img src='/Resources/Swagger_Delete.PNG'>

**2- Source codes.**

Server.js

```
const express = require('express');
const app = express();

app.use('/api-docs',swaggerUi.serve,swaggerUi.setup(swaggerDocs));
app.use(express.json());

var books = [{
    id: 123,
    title: 'A Tale of Two Cities',
    author: 'Charles Dickens',
},{
    id: 2,
    title: "Arrow",
    author: "series",
}]

app.get('/', (req, res) => {
    res.send('<h1>your server is running .... i</h1>');
});
app.get('/list', (req,res) => {
    res.status(200).send(books)
});
app.get('/getbook/:id', (req,res) => {
    const book = books.find(m => m.id === parseInt(req.params.id))
    if (!book) {
        res.status(404).send('Dont find ID')
    } else {
        res.send(book)
    }
});
app.post('/insert', (req,res) => {
    const book = {
        id: books.length + 1,
        title: req.body.name,
        author: req.body.author,
    }
    books.push(book);
    res.send(book);
});
app.get('/delete/:id', (req,res) => {
    const book = books.find(m => m.id === parseInt(req.params.id));
    if(!book) {
        res.status(404).send('The book with the given ID was not found ')
    }else {
        const index = books.indexOf(book);
        books.splice(index, 1);
        res.send(book);
    }
});
const port = process.env.PORT || 3000
s = app.listen(port, () => console.log(`Listening on port${port}...`) );
var io = require("socket.io")(s);

io.on("connection .......", (socket) => {
    console.log("already connect to server");

    socket.on('insert',(book) => {
        io.sockets.emit('notify',book)
    })
  });
  
```

**3- Compare how to call the methods based on gRPC and REST API side-by-side**

Function | gRpc | REST API
---------|------|-----------
List Books|client.list({}, function(error, books) {printResponse(error, books);})|
Get Book|  client.get({ id: parseInt(id) }, function(error, book) {printResponse(error, book);});|
Insert Book| client.insert(book, function(error, empty) {printResponse(error, empty);})|
Delete Book| client.delete({ id: parseInt(id) }, function(error, empty) {printResponse(error, empty);});|

**4- The main differences between REST API and gRPC**

REST API uses HTTP 1.1 but gRPC uses HTTP/2 which is more faster.



**5- the benefits of introduce interface in front of the gRPC and REST API of the book services**
- Easier to maintain
- In API with interface, Detail in code be hidden form user that make user easy to use API function.
- API with interface is more clear than API without interface.


**6- Based on the introduced interface, compare how to call the methods based on gRPC and REST API side-by-side**
Function | gRpc | REST API
---------|------|-----------
List Books|go run client.go list|
Get Book|go run client.go get id|
Insert Book|go run client.go insert id title author|
Delete Book|go run client.go delete id|

**7- A component diagram representing the book services with and without interfaces**
