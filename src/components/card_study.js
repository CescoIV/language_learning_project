import React, { Component } from 'react';
import Card from './card.js';
import Quiz from './quiz.js';
import Search from './search.js';
import axios from 'axios';
import './card_study.css';

class CardStudy extends Component {
  constructor(props){
    super(props);
    this.state = {
      lang: this.props.lang,
      display: null,
      data: [],
    }
    this._flashCards = this._flashCards.bind(this);
    this._quizGenerator = this._quizGenerator.bind(this);
    this._getData = this._getData.bind(this);
    this._searchComp = this._searchComp.bind(this);
  }

  _flashCards(){
    console.log(this.state.data)
    let dataCards = this.state.data.map((obj,idx) =>(<Card word={obj.word_native} def={obj.word_english} sol={obj.correct_responses} key={idx}/>));
    dataCards = this._shuffle(dataCards).slice(0,5);
    this.setState({
      message: (<div className='read'><h1>Study Time!</h1><p>Take your time to study some words, five are selected at random each time:</p></div>),
      display: dataCards
    })
  }
  _searchComp(){
    this.setState({
      message:(<div className='read'><h1>Search for a word!</h1></div>),
      display: (<Search data={this.state.data}/>),
    })
  }
  _shuffle(words){
    console.log(words, "preshuffle");
    for(let i in words){
      //get rndom index in word arr
      let idx = Math.floor(Math.random()*words.length);
      [words[i],words[idx]]=[words[idx],words[i]];
    }
    console.log(words,'postshuffle');
    return words;
  }
  _quizGenerator(){
    let myDataQuiz = (<Quiz lang={this.state.data}/>)
    this.setState({
      message:null,
      display: myDataQuiz
    })
  }
  _getData(){
    let cors = 'https://cors-anywhere.herokuapp.com/';
    axios.get(cors+'https://nahuatl-api.herokuapp.com/language/nahuatl/words')
    .then((response) =>{
      this.setState({
        data: response.data
      })
      this._flashCards();
    })
    .catch((error) =>{
      console.log(error);
    })
  }
  componentWillMount(){
    this._getData();
  }
  render() {                      
    return (
      <div className="App">
        <div className="nav_bar_bg">
          <nav className='nav_bar'>
            <div onClick={this._flashCards}><p title="study flash cards"className='nav_button s'>S</p></div>
            <div onClick={this._quizGenerator}><p title="Quiz me!"className='nav_button q'>Q</p></div>
            <div onClick={this._searchComp}><p title='Search words'className='nav_button'>Se</p></div>
          </nav>
        </div>
        <div className='display'>{this.state.message}{this.state.display}</div>

      </div>
    );
  }
}

export default CardStudy;
