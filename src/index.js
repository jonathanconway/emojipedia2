import React from 'react';
import ReactDOM from 'react-dom';

import App from './App';
import './index.css';
import emojis from './emojis.js';

ReactDOM.render(
  <App emojis={emojis} maxNumberVisible={15} />,
  document.getElementById('root')
);
