import React, { Component} from 'react';
import './App.css'; 
import CardStudy from './components/card_study.js'

class App extends Component {

  constructor(props){
    super(props);
    this.initate = 
    this.state = {
      buttons:(<button className='lang_btn' onClick={(e) => this._generateStudy(e,'nahuatl')}>Teach me Nahuatl!</button>),
      display: (<div><h1>Welcome to the Nahuatl project!</h1>
          <h3>Ready to get started?</h3></div>)
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
      buttons:(<button className='lang_btn' onClick={(e) => this._generateStudy(e,'nahuatl')}>Nahuatl</button>),
    })
  }
  render() {
                                     
    return (
      <div className="App">
        <div className='bottom'>
          {this.state.display}
          {this.state.buttons}
        </div>
      </div>
    );
  }
}

export default App;
