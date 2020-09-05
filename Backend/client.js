const axios = require('axios');
const URL = 'http://localhost:3000';

var processName = process.argv.shift();
var scriptName = process.argv.shift();
var command = process.argv.shift();

const listBooks = async () => {
    const res = await axios.get(`${URL}/books`);
    const books = res.data;
    console.log(books);
    return books;
};

const insertBook = async (id, title, author) => {
    var book = { id: parseInt(id), title: title, author: author };
    let res = await axios.post(`${URL}/insert`,book);
    console.log(res.data)
}

const getBook = async (id) => {
    const res = await axios.get(`${URL}/book/${id}`);
    const book = res.data;
    console.log(book);
    return book;
};

const deleteBook = async (id) => {
    let res = await axios.delete(`${URL}/delete/${id}`);
    console.log(res.data)
}

if (command == "list") listAllBooks();
else if (command == "insert") insertBook(process.argv[0], process.argv[1], process.argv[2]);
else if (command == "get") getBook(process.argv[0]);
else if (command == "delete") deleteBook(process.argv[0]);