import React, { Component } from "react";

export default class Home extends Component {
  
  render() {
    return (
      <div>
        <h1 style={{colot: 'blue'}}>Home Page</h1>
        <Link to="/user">用户</Link>
      </div>
    );
  }
}
