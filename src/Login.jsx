import React, { Component } from 'react';

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoggedIn: false,
    }
  }
  onLogin = () => {
    this.setState({
      isLoggedIn: true,
    });
  }
  render() { 
  return <button onClick={this.onLogout}>Logout</button>
}
}

export default Login;