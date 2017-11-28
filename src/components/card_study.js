import React, { Component } from 'react';
import Card from './card.js';
import LangButton from './lang_buttons.js';
import Quiz from './quiz.js';

class CardStudy extends Component {
  constructor(props){
    super(props);
    this.state = {
      lang: this.props.lang,
      display: null,
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
  }

  _flashCards(){
    let lang = this.state.langs[this.state.lang];
    console.log(lang);
    let cards = lang.words.map((obj,idx) => (<Card word={obj.word} def={obj.definition} key={idx}/>));
    this.setState({
      display: cards
    })
  }
  _quizGenerator(){
    let lang = this.state.langs[this.state.lang];

    let myQuiz = (<Quiz lang={lang}/>);
    this.setState({
      display: myQuiz
    })
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
