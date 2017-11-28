import React, { Component } from 'react';
import './card.css';

class Card extends Component {
  constructor(props){
    super(props);
    this.state = {
      hasFlipped: false
    }
    this._flipCard = this._flipCard.bind(this);
  }

  _flipCard(e){
    e.preventDefault();
    if(!this.state.hasFlipped){
      this.setState({
        hasFlipped : true
      })
    }else{
      this.setState({
        hasFlipped : false
      })
    } 
  }
  render() {
    let display = this.state.hasFlipped ? this.props.def : this.props.word
    return (
      <div className="card-container" onClick={this._flipCard}>
        <p>{display}</p>
      </div>
    );
  }
}

export default Card;
