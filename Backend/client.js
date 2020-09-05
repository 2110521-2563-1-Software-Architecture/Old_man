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
    return books;
};

const insertBook = async (id, name, author) => {
    var book = { id: parseInt(id), name: name, author: author };
    let res = await axios.post(`${URL}/insert`,book);
    console.log(res.data);
}

const getBook = async (id) => {
    const res = await axios.get(`${URL}${id}`);
    const book = res.data;
    console.log(book);
    return book;
};

const deleteBook = async (id) => {
    let res = await axios.delete(`${URL}${id}`);
    console.log(res.data)
}

const watchBooks = async () => {
    const socket = io("http://localhost:3001/");
    socket.emit("watch");
    socket.on("respond", (message) => {
    console.log(message);
  });
}

if (command == "list") listBooks();
else if (command == "insert") insertBook(process.argv[0], process.argv[1], process.argv[2]);
else if (command == "get") getBook(process.argv[0]);
else if (command == "delete") deleteBook(process.argv[0]);
else if (command == "watch") watchBooks();