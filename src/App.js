import React, { Component} from 'react';
import './App.css'; 
import CardStudy from './components/card_study.js'

class App extends Component {

  constructor(props){
    super(props);
    this.state = {
      buttons:(<button className='lang_btn' onClick={(e) => this._generateStudy(e,'nahuatl')}>Teach me Nahuatl!</button>),
      display: (<div><h2>Welcome to the Nahuatl project!</h2><h3>Ready to get started?</h3></div>)
    }
    this._generateStudy = this._generateStudy.bind(this);
  }
  _generateStudy(e,str){
    e.preventDefault();
    this.setState({
      display: (
        <div>
          <CardStudy lang={str}/>
        </div>
        ),
      buttons: null,
    })
  }
  render() {
                                     
    return (
      <div className="App">
        <header>
          <p>Nahuatl Project</p>
          <img src="http://docfilm.com/site/wp-content/uploads/2014/12/olin-vector.png" alt='logo'/>
          <span className='hed'>Created By: Francisco Ordaz IV</span>
          <a href='https://www.github.com/CescoIV'><img src='https://image.flaticon.com/icons/svg/25/25231.svg'/></a>
        </header>
        <div className='bottom'>
          {this.state.display}
          {this.state.buttons}
        </div>
      </div>
    );
  }
}

export default App;
