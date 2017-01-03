import React from 'react';
import ReactDOM from 'react-dom';
import Emoji from './Emoji';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Emoji emoji="😀" description="Grinning Face" />, div);
});
