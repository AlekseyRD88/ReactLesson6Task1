import React, { Component } from 'react';

class Logout extends Component {
  constructor(props) {
    super(props);
  }
  onLogout = () => {
    this.setState({
      isLoggedIn: false,
    });
  }
  render() {
    <button onClick={this.onLogin}>Login</button>;
  }
}

export default Logout;
