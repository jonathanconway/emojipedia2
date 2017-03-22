import React, { Component, PropTypes } from 'react';

import './SearchBox.css';

class SearchBox extends Component {
  static propTypes = {
    onChangeSearchText: PropTypes.func.isRequired
  }

  onChangeSearchText(e) {
    this.props.onChangeSearchText(e.target.value);
  }

  onFocusSearchText(e) {
    const input = e.target;
    input.select();
    input.selectionStart = 0;
    input.selectionEnd = input.value.length;
  }

  render() {
    return (
      <form className="searchbox">
        <label className="hidden" htmlFor="search">Search for emojis</label>
        <input
        className="searchbox-input"
        id="search"
        type="search"
        ref="search"
        autoFocus
        autoCapitalize="off"
        autoComplete="off"
        autoCorrect="off"
        value={this.props.searchText}
        onChange={this.onChangeSearchText.bind(this)}
        onFocus={this.onFocusSearchText.bind(this)}
        />
      </form>
    );
  }
}

export default SearchBox;
