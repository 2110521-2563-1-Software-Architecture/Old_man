# Software Architecture Assigment 1
#### Group: Old Man with Backache

**Member name:**
> - คณิสร			เข็มทอง				    6030064821
> - วชิรฉัตร		 สวัสดิวัตน์ ณ อยุธยา		 6030506921 
> - ธียศ			ศิริเสรีวรรณ			  6031027821 
> - นนทกร		   เกตุนิรัตน์				  6031028421 
> - นนทกร		   ตะบูนพงศ์				6031029021 
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

Client.js

```

const axios = require('axios');
const io = require("socket.io-client");
const URL = 'http://localhost:3000';

var processName = process.argv.shift();
var scriptName = process.argv.shift();
var command = process.argv.shift();

const listBooks = async () => {
    const res = await axios.get(`${URL}/list`);
    const books = res.data;
    console.log(books);
};

const insertBook = async (name, author) => {
    var book = { name: name, author: author };
    let res = await axios.post(`${URL}/insert`,book);
    console.log(res.data);
}

const getBook = async (id) => {
    await axios.get(`${URL}/getbook/${id}`)
    .then((response) => {
        console.log(response.data);
    })
    .catch((error) => {
        console.log(error.response.data); //Logs a string: Error: Request failed with status code 404
    })
};

const deleteBook = async (id) => {
    await axios.get(`${URL}/delete/${id}`)
    .then((response) => {
        console.log(response.data);
    })
    .catch((error) => {
        console.log(error.response.data); //Logs a string: Error: Request failed with status code 404
    })
}

const watchBooks = async () => {
    /*let socket = io.connect(URL);
    socket.on("notify", (book) => { console.log(book); });*/
    console.log("Unavailable in REST API");
}

if (command == "list") listBooks();
else if (command == "insert") insertBook(process.argv[0], process.argv[1]);
else if (command == "get") getBook(process.argv[0]);
else if (command == "delete") deleteBook(process.argv[0]);
else if (command == "watch") watchBooks();

```

**3- Compare how to call the methods based on gRPC and REST API side-by-side**

Function | gRpc | REST API
---------|------|-----------
List Books|client.list({}, function(error, books) {printResponse(error, books);})|axios.get(`${URL}/list`);
Get Book|  client.get({ id: parseInt(id) }, function(error, book) {printResponse(error, book);});|axios.get(`${URL}/getbook/${id}`);
Insert Book| client.insert(book, function(error, empty) {printResponse(error, empty);})|axios.post(`${URL}/insert`,book);
Delete Book| client.delete({ id: parseInt(id) }, function(error, empty) {printResponse(error, empty);});|axios.get(`${URL}/delete/${id}`);
Watch Book| cliet.watch({})|socket.on("respond", (message));

**4- The main differences between REST API and gRPC**

REST API uses HTTP 1.1 but gRPC uses HTTP/2 which is more faster.



**5- the benefits of introduce interface in front of the gRPC and REST API of the book services**
- Easier to maintain
- In API with interface, Detail in code be hidden form user that make user easy to use API function.
- API with interface is more clear than API without interface.


**6- Based on the introduced interface, compare how to call the methods based on gRPC and REST API side-by-side**
Function | gRpc | REST API
---------|------|-----------
List Books|go run client.go list|node client.js list
Get Book|go run client.go get id|node client.js get id
Insert Book|go run client.go insert id title author|node client.js insert title author
Delete Book|go run client.go delete id|node client.js delete id
Watch Book|go run client.go watch|node client.js watch

**7- A component diagram representing the book services with and without interfaces**
<img src='/Resources/ComponentDiagram.jpeg'>
