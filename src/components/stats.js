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
    let arr= this.props.known
    for(let word in arr){
      arr[word] = arr[word].toLowerCase();
      arr[word] += ' ';
      string.push((<p style={pstyle} key={word}>{arr[word]}</p>)); 
    }                   
    return (
      <div className="App">
        {string}
      </div>
    );
  }
}

export default Stats;
