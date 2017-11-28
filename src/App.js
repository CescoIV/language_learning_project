import React, { Component, ReactDOM } from 'react';
import logo from './logo.svg';
import './App.css'; 
import Card from './components/card.js'
import LangButton from './components/lang_buttons.js'
import CardStudy from './components/card_study.js'
// import Auth from './components/auth.js'

class App extends Component {

  constructor(props){
    super(props);
    this.buttons =  [
        (<button className='lang_btn' onClick={(e)=> this._generateStudy(e,'nahuatl')}>Nahuatl</button>),
        (<button className='lang_btn' onClick={(e)=> this._generateStudy(e,'german')}>German</button>)
        ]
    this.state = {
      buttons:this.buttons,
      display: null
    }
    this._generateStudy = this._generateStudy.bind(this);
    this.something = this.something.bind(this);

  }

  _generateStudy(e,str){
    e.preventDefault();
    console.log('tryna change lang',str);

    this.setState({
      display: (
        <div>
          <CardStudy lang={str}/>
        </div>
        ),
      buttons: null,

    })
    console.log(this.state.display, 'i just set the state');
    console.log(this.button);

  }
  something(e){
    e.preventDefault();
    this.setState({
      display:null,
      buttons: this.buttons
    })
  }
  render() {
                                     
    return (
      <div className="App">
        <div className='bottom'>
          <h1>Which language would you like to study?</h1>
          {this.state.buttons}
          <button onClick={this.something}>reset</button>
          {this.state.display}
        </div>
      </div>
    );
  }
}

export default App;
