import React, { Component } from 'react';
import Card from './card.js';
import Quiz from './quiz.js';
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
  }

  _flashCards(){
    console.log(this.state.data)
    let dataCards = this.state.data.map((obj,idx) =>(<Card word={obj.word_native} def={obj.word_english} sol={obj.correct_responses} key={idx}/>));
    this.setState({
      display: dataCards
    })
  }
  _quizGenerator(){
    let myDataQuiz = (<Quiz lang={this.state.data}/>)
    this.setState({
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
          </nav>
        </div>
        <p>hello</p>
        <div className='display'>{this.state.display}</div>

      </div>
    );
  }
}

export default CardStudy;
