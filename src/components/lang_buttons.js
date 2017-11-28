import React, { Component } from 'react';
// import './card.css';

class LangButton extends Component {

  render() {
    let display = this.state.hasFlipped ? this.props.def : this.props.word
    return (
      <div>
        <button>{this.props.lang}</button>
      </div>
    );
  }
}

export default LangButton;
