import React, { Component } from 'react';
import './quiz.css';

class Stats extends Component {
  render() {  
    let pstyle={
      color: '#fff',
      fontWeight: 'bold',
      backgroundColor: 'rgba(0,0,0,0.5)',
      margin:'0px',
    }
    let string = [];
    for(let word of this.props.known ){
      word = word.toLowerCase();
      word += ' ';
      string.push((<p style={pstyle}>{word}</p>)); 
    }                   
    return (
      <div className="App">
        <p>{string}</p>
      </div>
    );
  }
}

export default Stats;
