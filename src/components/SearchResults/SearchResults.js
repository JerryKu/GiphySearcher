import React from 'react';

class SearchResults extends React.Component {

    constructor(props) {
        super(props);
    }

    render(){
        return (
            <div className="SearchResults">
                <div className="flex-wrapper">
                    {this.props.imageResults.map((result) => {
                        return (
                            <div className="gif-container">
                                <img className="gif-preview" src={result.images.preview_gif.url} key={result.id} alt={result.title} onClick={()=>{this.props.onOpenModal(result)}}/>
                                {result.title ? <div className="gif-title">{result.title}</div> : <div>untitled</div>}
                            </div>
                        )
                    } )}
                </div>
            </div>
          );
    }
}

export default SearchResults;
