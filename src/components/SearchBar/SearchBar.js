import React from 'react';
import { thisExpression } from '@babel/types';

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
            <input type="text" value={this.state.searchTerm} onChange={this.onChangeHandler} onKeyDown={this.onKeyDownHandler}/>
        );
    }
}

export default SearchBar;
