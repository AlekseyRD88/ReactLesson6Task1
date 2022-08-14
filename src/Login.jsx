import React, { Component } from 'react';

class Login extends Component {
  constructor(props) {
    super(props);
  }
  onLogin = () => {
    this.setState({
      isLoggedIn: true,
    });
  }
  render() { 
  <button onClick={this.onLogout}>Logout</button>
}
}

export default Login;