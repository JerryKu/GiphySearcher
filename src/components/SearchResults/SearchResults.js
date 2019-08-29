import React from 'react';

class SearchResults extends React.Component {

    constructor(props) {
        super(props);
    }

    render(){
        return (
            <div className="SearchResults">
                {this.props.imageResults.map((result) => {
                    return <img src={result.images.fixed_width.url}/>
                } )}
            </div>
          );
    }
}

export default SearchResults;
