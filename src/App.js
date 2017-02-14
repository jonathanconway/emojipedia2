import React, { Component, PropTypes } from 'react';

import Header from './Header';
import Footer from './Footer';
import SearchBox from './SearchBox';
import SearchResults from './SearchResults';
import emojis from './emojis';

import './App.css';

class App extends Component {
  static propTypes = {
    emojis: PropTypes.array.isRequired,
    maxNumberVisible: PropTypes.number.isRequired
  };

  constructor(props) {
    super(props);
    this.state = {
      searchText: ''
    }
  }

  componentDidMount() {
    const keywords = window.location.hash.split('keywords=')[1];
    if (keywords) {
      this.setState({ searchText: keywords });
    }
  }

  onChangeSearchText(newValue) {
    this.setState({ searchText: newValue });
  }

  render() {
    return (
      <div className="app">
        <Header />
        <div className="app-body">
          <SearchBox
            onChangeSearchText={this.onChangeSearchText.bind(this)}
          />
          <SearchResults
            searchText={this.state.searchText}
            emojis={emojis}
            maxNumberVisible={15}
          />
        </div>
        <Footer />
      </div>
    );
  }
}

export default App;
