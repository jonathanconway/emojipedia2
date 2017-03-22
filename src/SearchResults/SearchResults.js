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
    const searchText = this.props.searchText.toLowerCase();
    return searchText && (
      (emoji.description.toLowerCase().indexOf(searchText) > -1) ||
      (emoji.keywords && emoji.keywords.filter(keyword => keyword.indexOf(searchText) > -1).length > 0));
  }

  render() {
    return (
      <div className="App-search-results">
        { this.props.emojis
          .filter(this.filterBySearchText.bind(this))
          .slice(0, this.props.maxNumberVisible)
          .map((emoji, index) => <Emoji {...emoji} key={index} />) }
      </div>
    );
  }
}

export default SearchResults;
