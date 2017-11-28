import React, { Component } from 'react';
import Card from './card.js';
import LangButton from './lang_buttons.js';
import Quiz from './quiz.js';
import axios from 'axios';

class CardStudy extends Component {
  constructor(props){
    super(props);
    this.state = {
      lang: this.props.lang,
      display: null,
      data: [],
      langs: {
        nahuatl: {
          words: [
            {
              word: 'macuahuitl',
              definition: 'aztec sword',
            },
            {
              word: 'coyotl',
              definition: 'coyote',
            },
            {
              word: 'tomatl',
              definition: 'tomate',
            },
            {
              word: 'huexolotl',
              definition: 'turkey',
            },
            {
              word: 'tlatoani',
              definition: 'leader',
            },
            {
              word: 'atl',
              definition: 'water',
            },
            {
              word: 'ahuacatl',
              definition: 'avocado(fruit)',
            },
            {
              word: 'xihuitl',
              definition: 'year',
            },
            {
              word: 'ahuacacuahitl',
              definition: 'avocado tree',
            }
          ]
        },
        german: {
          words: [
            {
              word: 'strasse',
              definition: 'street',
            },
          ]
        }
      }
    }
    this._flashCards = this._flashCards.bind(this);
    this._quizGenerator = this._quizGenerator.bind(this);
    this._getData - this._getData.bind(this);
  }

  _flashCards(){
    let lang = this.state.langs[this.state.lang];
    console.log(lang);
    console.log(this.state.data)
    let cards = lang.words.map((obj,idx) => (<Card word={obj.word} def={obj.definition} key={idx}/>));
    let dataCards = this.state.data.map((obj,idx) =>(<Card word={obj.word_native} def={obj.word_english} sol={obj.correct_responses} key={idx}/>));
    this.setState({
      display: dataCards
    })
  }
  _quizGenerator(){
    let lang = this.state.langs[this.state.lang];

    let myQuiz = (<Quiz lang={lang}/>);
    let myDataQuiz = (<Quiz lang={this.state.data}/>)
    this.setState({
      display: myDataQuiz
    })
  }
  _getData(){
    let cors = 'https://cors-anywhere.herokuapp.com/';
    axios.get(cors+'https://nahuatl-api.herokuapp.com/language/nahuatl/words')
    .then((response) =>{
      this.data = response.data;
      console.log(response.data);
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
        <nav className='nav_bar'>
          <button onClick={this._flashCards}>Study Flash Cards!</button>
          <button onClick={this._quizGenerator}>Quiz Me!</button>
        </nav>
        <h1>Nahuatl project</h1>
        <div>{this.state.display}</div>
      </div>
    );
  }
}

export default CardStudy;
