import React from 'react';
import logo from './logo.svg';
import './App.css';
import SearchBar from './components/SearchBar.js'
import BookTable from './components/BookTable.js'
import AddBook from './components/AddBook.js'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>Welcome to Minimal Library</p>
      </header>

      <main className="App-main">
        <div className='row'>
          <div className='container-md'><SearchBar/></div>
          <div className='container-md'><AddBook/></div>
        </div>
        <div>
          <BookTable/>
        </div>
        
      </main>
    </div>
  );
}

export default App;
