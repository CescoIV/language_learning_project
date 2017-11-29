import React, { Component } from 'react';
import './card.css';

class Card extends Component {
  constructor(props){
    super(props);
    this.state = {
      hasFlipped: false
    }
    this._flipCard = this._flipCard.bind(this);
    this._editSol = this._editSol.bind(this);
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
  _editSol(){
    //formats the possible solutions
    let ayy = this.props.sol.map((el) => el + ', ');
    let l = ayy.length-1;
    ayy[l] = ayy[l].slice(0, ayy[l].length-2)
    return ayy;
  }
  render() {
    let display = this.state.hasFlipped ? 
    (<div>
      <p className='word'>{this.props.def}</p>
      <div className='answer'>
        <p>Possible translations:</p>
        {this._editSol()}
      </div>
    </div>) : <p className="word">{this.props.word}</p>
    return (
      <div className='card-background'>
        <div className="card-container" onClick={this._flipCard}>
          {display}
        </div>
      </div>
    );
  }
}

export default Card;
