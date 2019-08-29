import React from 'react';
import axios from 'axios';

class SearchResults extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            imageResults: []
        }
    }

    componentDidMount() {
        axios.get('http://api.giphy.com/v1/gifs/trending?api_key=e5IHMLQpsdQwrtrQyJiDibOYStCTgm3T')
        .then((response) => {
            this.setState({
                imageResults: response.data.data
            })
        })
    }

    render(){
        return (
            <div className="SearchResults">
                {this.state.imageResults.map((result) => {
                    console.log(result.images);
                    return <img src={result.images.original.url}/>
                } )}
            </div>
          );
    }
}

export default SearchResults;
