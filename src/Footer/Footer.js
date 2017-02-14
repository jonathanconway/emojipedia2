import React, { Component } from 'react';

import './Footer.css';

class Footer extends Component {
  render() {
    return (
      <footer className="footer">
        <span><span className="copyleft" title="Copyleft">&copy;</span> Jonathan Conway, 2016</span><span>&nbsp;|&nbsp;</span>
        <a href="https://github.com/jonathanconway/emojipedia2">Source on GitHub</a>
      </footer>
    );
  }
}

export default Footer;
