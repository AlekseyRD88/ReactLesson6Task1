import React, { Component } from 'react';

class Logout extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoggedIn: true,
    }
  }
  onLogout = () => {
    this.setState({
      isLoggedIn: false,
    });
  }
  render() {
    return <button onClick={this.onLogin}>Login</button>;
  }
}

export default Logout;
