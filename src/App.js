import React from 'react';
import './App.css';
import SearchBar from './components/SearchBar/SearchBar';
import SearchResults from './components/SearchResults/SearchResults';

import axios from 'axios';

class App extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      currentSearch: "",
      imageResults: [],
      imageOffset: 15
    }
    this.onSearch = this.onSearch.bind(this);
    this.onLoadMore = this.onLoadMore.bind(this);
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
    axios.get('http://api.giphy.com/v1/gifs/search?api_key=e5IHMLQpsdQwrtrQyJiDibOYStCTgm3T&limit=15&q=' + searchTerm)
    .then((response)=> {
      this.setState({
          currentSearch: searchTerm,
          imageResults: response.data.data
      })
    })
  }

  onLoadMore(){
    axios.get('http://api.giphy.com/v1/gifs/search?api_key=e5IHMLQpsdQwrtrQyJiDibOYStCTgm3T&limit=15&offset=' +
      this.state.imageOffset +
     '&q=' + this.state.currentSearch)
    .then((response)=> {
      let currentResults = this.state.imageResults;
      let imageOffset = this.state.imageOffset + 15;
      currentResults = currentResults.concat(response.data.data)
      this.setState({
          imageResults: currentResults,
          imageOffset: imageOffset
      })
    })
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
        <SearchBar onSearch={this.onSearch}/>
        <SearchResults imageResults={this.state.imageResults}/>
        <input type="button" value="Load More" onClick={this.onLoadMore}></input>
        </header>
      </div>
    );
  }
}

export default App;
