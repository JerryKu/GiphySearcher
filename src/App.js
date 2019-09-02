import React from 'react';
import './App.scss';
import SearchBar from './components/SearchBar/SearchBar';
import SearchResults from './components/SearchResults/SearchResults';
import ImageModal from './components/ImageModal/ImageModal';

import axios from 'axios';

class App extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      currentSearch: "",
      imageResults: [],
      imageOffset: 17,
      selectedImage: {}
    }
  }

  componentDidMount() {
    axios.get('https://api.giphy.com/v1/gifs/trending?api_key=e5IHMLQpsdQwrtrQyJiDibOYStCTgm3T&limit=16')
    .then((response) => {
        this.setState({
            imageResults: response.data.data
        })
    });
  }

  onSearch = (searchTerm) => {
    let url;
    if(searchTerm === "") {
      url = 'https://api.giphy.com/v1/gifs/trending?api_key=e5IHMLQpsdQwrtrQyJiDibOYStCTgm3T&limit=16'
    } else {
      url = 'https://api.giphy.com/v1/gifs/search?api_key=e5IHMLQpsdQwrtrQyJiDibOYStCTgm3T&limit=16&q=' + searchTerm
    }
    axios.get(url)
    .then((response)=> {
      this.setState({
          currentSearch: searchTerm,
          imageResults: response.data.data,
          imageOffset: 17
      });
    })
  }

  onLoadMore = () => {
    let url;
    if(this.state.currentSearch === ""){
      url = 'https://api.giphy.com/v1/gifs/trending?api_key=e5IHMLQpsdQwrtrQyJiDibOYStCTgm3T&limit=16&offset=' +
      this.state.imageOffset;
    }else{
      url = 'https://api.giphy.com/v1/gifs/search?api_key=e5IHMLQpsdQwrtrQyJiDibOYStCTgm3T&limit=16&offset=' +
      this.state.imageOffset +
     '&q=' + this.state.currentSearch;
    }
    axios.get(url)
    .then((response)=> {
      let currentResults = this.state.imageResults;
      let imageOffset = this.state.imageOffset + 16;
      currentResults = currentResults.concat(response.data.data)
      this.setState({
          imageResults: currentResults,
          imageOffset: imageOffset
      })
    })
  }

  onOpenModal = (selectedImage) => {
    document.body.classList.add('modal-open');
    this.setState({
      selectedImage: selectedImage
    })
  }

  onCloseModal = () => {
    document.body.classList.remove('modal-open');
    this.setState({
      selectedImage: {}
    })
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
        <div className="nav-bar">
        <span className="logo"><strong>Jerphy</strong></span>
        <SearchBar onSearch={this.onSearch}/>
        </div>
        <SearchResults imageResults={this.state.imageResults} onOpenModal={this.onOpenModal}/>
        <input className="load-more" type="button" value="Load More" onClick={this.onLoadMore}></input>
        <ImageModal image={this.state.selectedImage} onCloseModal={this.onCloseModal}/>
        </header>
      </div>
    );
  }
}

export default App;
