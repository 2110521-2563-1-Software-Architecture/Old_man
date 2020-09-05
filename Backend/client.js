const axios = require('axios');
const io = require("socket.io-client");
const BASE_URL = 'http://localhost:3000';

let socket = io.connect(BASE_URL);

const listBooks = async () => {
    const res = await axios.get(`${BASE_URL}/books`);
    const books = res.data;
    console.log(books);
    return books;
};

const insertBook = async (id, title, author) => {
    var book = { id: parseInt(id), title: title, author: author };
    let res = await axios.post(`${BASE_URL}/insert`,book);
    console.log(res.data)
}

const getBook = async (id) => {
    const res = await axios.get(`${BASE_URL}/book/${id}`);
    const book = res.data;
    console.log(book);
    return book;
};

const deleteBook = async (id) => {
    let res = await axios.delete(`${BASE_URL}/delete/${id}`);
    console.log(res.data)
}