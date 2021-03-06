import React, { Component } from 'react';
import QuizCard from './quizcard.js';
import Stats from './stats.js';
import axios from 'axios';
import './quiz.css';

class Quiz extends Component {
  constructor(props){
    super(props);
    this.state={
      knownWords:[],
      display: null,
      statsDisplay: null,
      correct: 0
    }
    this._pickFive = this._pickFive.bind(this);
    this._count = this._count.bind(this);
    this._loadData= this._loadData.bind(this);
    this._toggleStats = this._toggleStats.bind(this);
  }
  _pickFive(){
    //shuffle every word in the dictionary
    let words = this.props.lang;
    words = this._shuffle(words);
    //pick first 5 from shuffled array
    let five = words.slice(0,5);
    //create quizcard components
    five = five.map((obj,idx) => (<QuizCard word={obj.word_native} def={obj.word_english} key={idx} count={this._count} sol={obj.correct_responses}/>));
    this.setState({
      display: five
    })
  }
  _shuffle(words){
    for(let i in words){
      //get rndom index in word arr
      let idx = Math.floor(Math.random()*words.length);
      [words[i],words[idx]]=[words[idx],words[i]];
    }
    return words;
  }
  _count(){
    this.setState({
      correct: this.state.correct + 1,
    })
  }
  _loadData(){
    let cors = 'https://cors-anywhere.herokuapp.com/';
    axios.get(cors+'https://nahuatl-api.herokuapp.com/users/fordaz')
    .then((response) =>{
      // console.log("I just made the axios call, hereis the response:",response.data.knownWords);
      this.setState({
        knownWords: response.data.knownWords
      })
      
      this._pickFive();
    })
    .catch((error) =>{
      console.log(error);
    })

    // console.log('im inside load data', this.state.knownWords);
  }
  _toggleStats(e){
    e.preventDefault();
    //update known words
    let cors = 'https://cors-anywhere.herokuapp.com/';
    axios.get(cors+'https://nahuatl-api.herokuapp.com/users/fordaz')
    .then((response) =>{
      this.setState({
        knownWords: response.data.knownWords
      })
      
    })
    .catch((error) =>{
      console.log(error);
    })

    if(this.state.statsDisplay){
      this.setState({
        statsDisplay:null
      })
    }else{
      this.setState({
        statsDisplay: (<Stats className='statbox' known={this.state.knownWords}/>)
      })
    }

  }
  componentWillMount(){
    this._loadData();
  }
  render() {                      
    return (
      <div className="App">
        <div className='read'>
          <h1>Take a quiz:</h1>
          <p>
            Here you can test the knowledge you may have learned
            while studying under the flash card study section. Below
            we display a word in Nahuatl for you and provide you with 
            an input form. A new quiz will be rendered everytime you visit
            this page.
          </p>
        </div>
        <p className='correct-num'>{this.state.correct}/5 correct</p>
        {this.state.display}
        <div className="show-known">
          <button onClick={this._toggleStats}>Show me my known words</button>
          <div className=''>
            {this.state.statsDisplay}
          </div>
        </div>
      </div>
    );
  }
}

export default Quiz;
