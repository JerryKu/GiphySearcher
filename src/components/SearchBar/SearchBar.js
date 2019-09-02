import React from 'react';

class SearchBar extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            searchTerm: ""
        }

        this.onChangeHandler = this.onChangeHandler.bind(this);
        this.onKeyDownHandler = this.onKeyDownHandler.bind(this);
    }

    onChangeHandler(e) {
        this.setState({
            searchTerm: e.target.value
        })
    }

    onKeyDownHandler(e){
        if(e.key === 'Enter') {
            this.props.onSearch(this.state.searchTerm);
        }
    }

    render(){
        return (
            <div className="SearchBar">
                <input className="search-input" type="text" value={this.state.searchTerm} onChange={this.onChangeHandler} onKeyDown={this.onKeyDownHandler}/>
            </div>
        );
    }
}

export default SearchBar;
