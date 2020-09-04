import React from 'react';
import logo from './logo.svg';
import './App.css';
import SearchBar from './SearchBar.js'
import BookTable from './BookTable.js'
import AddBook from './AddBook.js'

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
