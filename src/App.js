import React from 'react';
import './App.css';
import SearchBar from './components/SearchBar/SearchBar';
import SearchResults from './components/SearchResults/SearchResults';

import axios from 'axios';

class App extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      imageResults: []
    }
    this.onSearch = this.onSearch.bind(this);
  }

  componentDidMount() {
    axios.get('http://api.giphy.com/v1/gifs/trending?api_key=e5IHMLQpsdQwrtrQyJiDibOYStCTgm3T')
    .then((response) => {
        this.setState({
            imageResults: response.data.data
        })
    });
  }

  onSearch(searchTerm) {
    axios.get('http://api.giphy.com/v1/gifs/search?api_key=e5IHMLQpsdQwrtrQyJiDibOYStCTgm3T&q=' + searchTerm)
    .then((response)=> {
      this.setState({
          imageResults: response.data.data
      })
    })
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
        <SearchBar onSearch={this.onSearch}/>
        <SearchResults imageResults={this.state.imageResults}/>
        </header>
      </div>
    );
  }
}

export default App;
