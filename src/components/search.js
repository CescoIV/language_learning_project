import React, { Component } from 'react';

class Search extends Component {
  constructor(props){
    super(props);
    this.state={
      query : '',
      data: null,
      display: null,
    }
    this._updateQuery = this._updateQuery.bind(this);
    this._handleSearch = this._handleSearch.bind(this);
    this._showWordInfo = this._showWordInfo.bind(this);
  }
  _updateQuery(e){
    e.preventDefault();
    this.setState({
      query: e.target.value,
      display: null,
    })
  }
  _handleSearch(e){
    //may need to break into divide search as data gets bigger
    e.preventDefault();
    let found = {};
    for(let obj of this.props.data){
      let n = obj.word_native.toLowerCase();
      let en = obj.word_english.toLowerCase();
      let current = this.state.query;
      if(n === current || en === current){
        found = obj;
        break;
      }
    }
    this._showWordInfo(found);
  }
  _showWordInfo(obj){
    let resp = obj.correct_responses.map((el)=>{
      if(el !== obj.correct_responses[obj.correct_responses.length-1]){
        el += ", "
      }
      return el;
    })
    console.log(resp)
    let stuff = (
      <div>
        <h3>Here is what I know about this word</h3>
        <p>In Nahuatl, it is: <span>{obj.word_native}</span></p>
        <p>It Translates to <span>{obj.word_english}</span> in English</p>
        <p>Here are some possible translations:</p>
        {resp}
      </div>
      )
    this.setState({
      display: stuff
    })
  }
  render() {                      
    return (
      <div className="App">
        <form onSubmit={this._handleSearch}>
          <span>Search: </span><input onChange={this._updateQuery}type='text'></input>
        </form>
        {this.state.display}
      </div>
    );
  }
}

export default Search;
