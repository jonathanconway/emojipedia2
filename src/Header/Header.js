import React, { Component } from 'react';

import './Header.css';

import logoSvg from './logo.svg';

class Header extends Component {
  render() {
    return (
      <header className="header">
        <img className="header-logo" src={logoSvg} alt="Logo of a red book" />
        <h1 className="header-title">Emojipedia²</h1>
      </header>
    );
  }
}

export default Header;
