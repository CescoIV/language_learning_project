import React, { Component } from 'react';
import QuizCard from './quizcard.js';

class Quiz extends Component {
  constructor(props){
    super(props);
    this.state={
      display: null,
      correct: 0
    }
    this._pickFive = this._pickFive.bind(this);
    this._count = this._count.bind(this);
  }
  _pickFive(){
    console.log('hi im pick5');
    let words = this.props.lang.words;
    //shuffle
    for(let i in words){
      //get rndom index in word arr
      let idx = Math.floor(Math.random()*words.length);
      // console.log(i);
      // console.log(words[idx]);
      [words[i],words[idx]]=[words[idx],words[i]];
    }
    //pick first 5 from shuffled array
    let five = words.slice(0,5);
    console.log(five);
    //create quizcard components
    five = five.map((obj,idx) => (<QuizCard word={obj.word} def={obj.definition} key={idx} count={this._count}/>));
    console.log(five);
    this.setState({
      display: five
    })

  }
  _count(){
    this.setState({
      correct: this.state.correct + 1,
    })
  }
  componentWillMount(){
    this._pickFive();
  }
  render() {                      
    return (
      <div className="App">
        <p>hello im quiz</p>
        <p>{this.state.correct}/5 correct</p>
        {this.state.display}
      </div>
    );
  }
}

export default Quiz;
