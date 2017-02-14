import React, { Component, PropTypes } from 'react';

import './App.css';
import logoSvg from './logo.svg';
import Emoji from './Emoji';

class App extends Component {
  static propTypes = {
    emojis: PropTypes.array.isRequired,
    maxNumberVisible: PropTypes.number.isRequired
  };

  constructor(props) {
    super(props);
    this.state = {
      searchText: ''
    };
  }

  componentDidMount() {
    this.refs.search.focus();

    const keywords = window.location.hash.split('keywords=')[1];
    if (keywords) {
      this.setState({ searchText: keywords });
    }
  }

  onChangeSearchText(e) {
    this.setState({ searchText: e.target.value });
  }

  filterBySearchText(emoji) {
    const { searchText } = this.state;
    return searchText && emoji.description.toLowerCase().indexOf(searchText.toLowerCase()) > -1;
  }

  get searchResults() {
    return this.props.emojis
      .filter(this.filterBySearchText.bind(this))
      .slice(0, this.props.maxNumberVisible)
      .map((e, i) => <Emoji {...e} key={i} />)
  }

  onFocusSearchText(e) {
    const input = e.target;
    input.select();
    input.selectionStart = 0;
    input.selectionEnd = input.value.length;
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img className="App-logo" src={logoSvg} alt="" />
          <h2 className="App-title">Emojipedia²</h2>
        </header>
        <div className="App-body">
          <form className="App-search">
            <label className="hidden" htmlFor="search">Search for emojis</label>
            <input
              className="App-search-input"
              id="search"
              type="search"
              ref="search"
              autoFocus
              autocapitalize="off"
              autocomplete="off"
              autocorrect="off"
              value={this.state.searchText}
              onChange={this.onChangeSearchText.bind(this)}
              onFocus={this.onFocusSearchText.bind(this)}
            />
          </form>
          <div className="App-search-results">
            { this.searchResults }
          </div>
        </div>
        <footer className="App-footer">
          <span><span className="Copyleft" title="Copyleft">&copy;</span> Jonathan Conway, 2016</span><span>&nbsp;|&nbsp;</span>
          <a href="https://github.com/jonathanconway/emojipedia2">Source on GitHub</a>
        </footer>
      </div>
    );
  }
}

export default App;
