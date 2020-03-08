import React, { Component } from 'react'

export default class Login extends Component {
  render() {
    return (
      <div>
        <input name="name" type="text" onInput={(e) => {console.log('姓名：', e.target.value)}} />
        <input name="password" type="password" onInput={(e) => {console.log('密码：',e.target.value)}} />
        <button onClick={() => {console.log('click');}}>登录</button>
      </div>
    )
  }
}
