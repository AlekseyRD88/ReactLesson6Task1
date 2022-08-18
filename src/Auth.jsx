import React, { Component } from 'react';
import Greeting from './Greeting.jsx';
import Login from './Login.jsx';
import Logout from './Logout.jsx';
class Auth extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoggedIn: false,
    }
  }
  handleLoginClick = () => {
    this.setState({
      isLoggedIn: true
    })
  }

  handleLogoutClick = () => {
    this.setState({
      isLoggedIn: false
    })
  }
  render() {
    let button;
    if (this.state.isLoggedIn) {
      button = <Logout onClick={this.handleLogoutClick} />;
    } else {
      button = <Login onClick={this.handleLoginClick}/>;
    }
    return (
      <div className="panel">
        <Greeting isLoggedIn={this.state.isLoggedIn}/>
        <div>{button}</div>
      </div>
    );
  }
}

export default Auth;