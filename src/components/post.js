import React, { Component } from 'react';
import './quiz.css';
import axios from 'axios';

class Post extends Component {
  constructor(props){
    super(props);
    this.state={
      native:'',
      english:'',
      solutions:[],
    }
    this._trackNahuatl = this._trackNahuatl.bind(this);
    this._trackEnglish = this._trackEnglish.bind(this);
    this._postWord = this._postWord.bind(this);
  }
  _trackNahuatl(e){
    this.setState({
      native: e.target.value,
    })
  }
  _trackEnglish(e){
    this.setState({
      english: e.target.value,
    })
  }
  _postWord(e){
    let cors = 'https://cors-anywhere.herokuapp.com/';
    console.log('about to send request');
    axios.post(cors+'https://nahuatl-api.herokuapp.com/language/nahuatl/words',{
      word_native: this.state.native,
      word_english: this.state.english,
      correct_responses: this.state.solutions,
    }
      ).then((response) =>{
        console.log(response);
        alert('Your word has been posted, check the logs');
      }
      ).catch((err) =>{
        console.log(err);
      }
      );
  }
  render() {                   
    return (
      <div className="App">
        <span>Nahuatl Word:</span><input onChange={this._trackNahuatl}></input>
        <span>English translation:</span><input onChange={this._trackEnglish}></input>
        <button onClick={this._postWord}>POST</button>
      </div>
    );
  }
}

export default Post;
