import React from 'react';
import logo from './logo.svg';
import './App.css';
import SearchBar from './SearchBar.js'
import BookTable from './BookTable.js'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>Welcome to Book</p>
      </header>

      <main className="App-main">
        <SearchBar/>
        <BookTable/>
      </main>
    </div>
  );
}

export default App;
