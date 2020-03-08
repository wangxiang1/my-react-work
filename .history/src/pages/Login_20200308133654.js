import React, { Component } from 'react'

export default class Login extends Component {
  render() {
    return (
      <div>
        <input name="name" type="text" onInput={(e) => {console.log(e.target.value)}} />
        <input name="password" type="password" />
      </div>
    )
  }
}
