import React, { Component } from 'react'
import { connect } from 'react-redux';

@connect(
  state => ({login: state.login})
)
class User extends Component {

  render() {
    return (
      <div>
        <h2>User Page</h2>
        <h3>姓名：{this.props.login.name}</h3>
      </div>
    )
  }
}

export default User;