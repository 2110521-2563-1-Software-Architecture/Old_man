const express = require('express');
const swaggerJsDoc = require('swagger-jsdoc');
const swaggerUi = require('swagger-ui-express');

const swaggerOption = {
    swaggerDefinition: {
        info: {
            title: 'Books API',
            description: 'Books API Information',
            contract:{
                name: 'Nonthakorn Taboonpong'
            },
            servers: ['http://localhost:3000']
        }
    },
    apis: ["server.js"]
};

const swaggerDocs = swaggerJsDoc(swaggerOption);
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

//list book
app.get('/list', (req,res) => {
    res.send(books)
});

//get book
app.get('/getbook', (req,res) => {
    const book = books.find(m => m.id === parseInt(req.body.id))
    if (!book) {
        res.status(404).send('Dont find ID')
    } else {
        res.send(book)
    }
});

//insert book
app.post('/insert', (req,res) => {
    const book = {
        id: books.length + 1,
        title: req.body.name,
        author: req.body.type,
    }
    books.push(book);
    res.send(book);
});

//delete book
app.post('/delete', (req,res) => {
    const book = books.find(m => m.id === parseInt(req.body.id));
    if(!book) {
        res.status(404).send('The movie with the given ID was not found ')
    }else {
        const index = books.indexOf(book);
        books.splice(index, 1);
        res.send(book);
    }
});
//

const port = process.env.PORT || 3000
app.listen(port, () => console.log(`Listening on port${port}...`) );