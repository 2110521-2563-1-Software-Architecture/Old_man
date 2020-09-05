import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
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
          <div className='container-md' style={{width: '30%'}}><SearchBar/></div>
          <div className='container-md' style={{width: '30%'}}><AddBook/></div>
        </div>
        <div>
          <BookTable/>
        </div>
        
      </main>
    </div>
  );
}

export default App;
