import React, { Component } from 'react';

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
    console.log(this.state.value, 'i submitted');
    if(this.state.value === this.props.def){
      this.setState({
        solved: 'Correct',
        submitted: true
      })
      this.props.count();
    }else{
      this.setState({
        solved: 'Incorrect',
        submitted: true
      })
    }
  }
  render() {
    let form  = this.state.submitted ? (
      <div>
        <p>{this.state.solved}</p>
        <p>{this.props.def}</p>
      </div>
      ):(
        <form onSubmit={this._checkAccuracy}>
          <input type='text' onChange={this._updateValue}></input>
        </form>
      )                    
    return (
      <div className="App">
        <p>hello im quizcard</p>
        <p>{this.props.word}</p>
        {form}
      </div>
    );
  }
}

export default QuizCard;
