import React, { Component, PropTypes } from 'react';

import './Emoji.css';

class Emoji extends Component {
  static propTypes = {
    emoji: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    keywords: PropTypes.string.isRequired
  };

  constructor(props) {
    super(props);
    this.state = {
      copying: false
    };
  }

  onClick(e) {
    const input = this.refs.input;

    input.select();
    input.selectionStart = 0;
    input.selectionEnd = input.value.length;

    document.execCommand('copy');

    this.setState({ copying: true });
    setTimeout(() => this.setState({ copying: false }), 1000);
  }

  get hoverText() {
    return this.props.keywords && `Also: ${this.props.keywords.join(', ')}`;
  }

  render() {
    const { emoji, description } = this.props;
    return (
      <button className="Emoji" onClick={this.onClick.bind(this)} title={this.hoverText}>
        {this.state.copying && <span className="Emoji-copying">✂</span>}
        <span className="Emoji-emoji">{emoji}</span>
        <p className="Emoji-description" title={description}>{description}</p>
        <input className="hidden" type="text" readOnly ref="input" value={emoji} />
      </button>
    );
  }
}

export default Emoji;
