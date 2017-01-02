import React, { Component } from 'react';

import './App.css';
import emojis from './emojis.js';
import Emoji from './Emoji';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchText: ''
    };
  }

  onChangeSearchText(e) {
    this.setState({ searchText: e.target.value });
  }

  filterBySearchText(emoji) {
    return emoji.description.toLowerCase().indexOf(this.state.searchText.toLowerCase()) > -1;
  }

  render() {
    const searchLabelText = 'Search for Emojis by keyword';

    return (
      <div className="App">
        <div className="App-header">
          <h2>Emojipedia²</h2>
        </div>
        <div className="App-body">
          <form className="App-search">
            <label className="hidden" htmlFor="search">{searchLabelText}</label>
            <input
              className="App-search-input"
              id="search"
              type="search"
              placeholder={searchLabelText}
              onChange={this.onChangeSearchText.bind(this)}
            />
          </form>
          <div className="App-search-results">
            {
              emojis
                .filter(this.filterBySearchText.bind(this))
                .map(e => <Emoji {...e} />)
            }
          </div>
        </div>
      </div>
    );
  }
}

export default App;