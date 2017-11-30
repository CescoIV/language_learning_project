import React, { Component } from 'react';
import axios from 'axios';
import './quiz.css';

class QuizCard extends Component {
  constructor(props){
    super(props);
    this.state={
      value: null,
      solved: null,
    }
    this._updateValue = this._updateValue.bind(this);
    this._checkAccuracy  = this._checkAccuracy.bind(this);
  }
  _updateValue(e){
    this.setState({
      value: e.target.value
    })
  }
  _checkAccuracy(e){
    e.preventDefault();
    //check if the definition fits exactly, or if it fits one of the accepted responses
    let val = this.state.value.toLowerCase();
    if(val === this.props.def || this.props.sol.includes(val)){
      this.setState({
        solved: 'Correct',
        submitted: true
      })
      this.props.count();
      this._updateKnownWords(this.props.word);
    }else{
      this.setState({
        solved: 'Incorrect',
        submitted: true
      })
    }
  }
  _updateKnownWords(word){
    let cors = 'https://cors-anywhere.herokuapp.com/';
    axios.patch(cors+'https://nahuatl-api.herokuapp.com/users/fordaz/' + word)
    .then((response) => {
      console.log(response);
    })
    .catch((error)=>{ 
      console.log(error);
    })

  }
  render() {
    let form  = this.state.submitted ? (
      <div>
        <p className="solved">{this.state.solved}</p>
      </div>
      ):(
        <form onSubmit={this._checkAccuracy}>
          <input type='text' onChange={this._updateValue}></input>
        </form>
      )                    
    return (
      <div className="App">
        <p className='word'>{this.props.word}</p>{form}
      </div>
    );
  }
}

export default QuizCard;
