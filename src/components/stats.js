import React, { Component } from 'react';


class Stats extends Component {
  render() {  
    let string = ''
    for(let word of this.props.known ){
      word = word.toLowerCase();
      string += word + ' ';
    }                   
    return (
      <div className="App">
        {string}
      </div>
    );
  }
}

export default Stats;
