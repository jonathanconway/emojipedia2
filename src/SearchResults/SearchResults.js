import React, { Component, PropTypes } from 'react';

import './SearchResults.css';

import Emoji from './Emoji';

class SearchResults extends Component {
  static propTypes = {
    emojis: PropTypes.array.isRequired,
    maxNumberVisible: PropTypes.number.isRequired,
    searchText: PropTypes.string.isRequired
  };

  filterBySearchText(emoji) {
    const { searchText } = this.props;
    return searchText && emoji.description.toLowerCase().indexOf(searchText.toLowerCase()) > -1;
  }

  render() {
    return (
      <div className="App-search-results">
        { this.props.emojis
          .filter(this.filterBySearchText.bind(this))
          .slice(0, this.props.maxNumberVisible)
          .map((e, i) => <Emoji {...e} key={i} />) }
      </div>
    );
  }
}

export default SearchResults;
