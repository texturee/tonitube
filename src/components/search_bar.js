

//////////////////// SEARCH BAR COMPONENT ///////////////////////

import React, {Component} from 'react';

/////////////////////////////////////////////////////////////////

// 1- Searchbar that connects with the youtube API and search in
// youtube videos.

class SearchBar extends Component {

  constructor(props) {
    super(props);

    this.state = {
      term: ''
    };
  }

  onInputChange(term) {
    this.setState({term});
    this.props.onSearchTermChange(term);
  }

  render() {
    return(
      <div className="field search-bar">
        <input
          className="input"
          value = {this.state.term}
          onChange = { event => this.onInputChange(event.target.value)}
          placeholder = " Search"/>
      </div>
    );
  }
}

//2- We must export the component

export default SearchBar;

/////////////////////////////////////////////////////////////////
