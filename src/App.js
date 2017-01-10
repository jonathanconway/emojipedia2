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

  render() {
    const searchLabelText = 'Search for Emojis by keyword';

    return (
      <div className="App">
        <div className="App-header">
          <h2><img className="App-logo" src={logoSvg} alt="" /> Emojipedia²</h2>
          <em className="App-motto">A faster way to snatch 'n' grab emojis!</em>
        </div>
        <div className="App-body">
          <form className="App-search">
            <label className="hidden" htmlFor="search">{searchLabelText}</label>
            <input
              className="App-search-input"
              id="search"
              type="search"
              ref="search"
              placeholder={searchLabelText}
              onChange={this.onChangeSearchText.bind(this)}
            />
          </form>
          <div className="App-search-results">
            { this.searchResults }
          </div>
        </div>
        <div className="App-footer">
          <span>(ɔ) Copyleft, Jonathan Conway, 2016</span><span>&nbsp;|&nbsp;</span>
          <a href="https://github.com/jonathanconway/emojipedia2">Source on GitHub</a>
        </div>
      </div>
    );
  }
}

export default App;
