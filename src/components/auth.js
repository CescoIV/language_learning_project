import React, { Component } from 'react';


class Auth extends Component {
  constructor(props){
    super(props);
  }

  componentDidMount(){
    window.fbAsyncInit = function(){
      window.FB.init({
        appId : '2002148200041716',
        cookie : true,
        xfbml : true,
        version : 'v2.1'
      });
      window.FB.Event.subscrive('auth.statusChange',(response)=>{
        if(response.authResponse){
          this.updateLoggedInState(response);
        }else{
          this.updateLoggedOutState();
        }
      });
    }.bind(this);
    (function(d,s,id){
      var js, fjs = d.getelementsByTagName(s)[0];
      if(d.getelementById(id)) return;
      js = d.createElement(s); js.id=id;
      js.src = '//connect.facebook.net/en_US/sdk.js';
      fjs.parentNode.insertBefore(js,fjs);
      }(document, 'script','facebook-jssdk'));

    }
  }
  render() {
    return (
      <div>
      </div>
    );
  }
}

export default Auth;
