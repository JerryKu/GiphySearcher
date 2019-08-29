import React from 'react';
import './App.css';
import SearchBar from './components/SearchBar/SearchBar';
import SearchResults from './components/SearchResults/SearchResults';

function App() {
  return (
    <div className="App">
      <header className="App-header">
      <SearchBar/>
      <SearchResults />
      </header>
    </div>
  );
}

export default App;
