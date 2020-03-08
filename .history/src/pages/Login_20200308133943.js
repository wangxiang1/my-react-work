import React, { Component } from 'react'

export default class Login extends Component {
  constructor(props) {
    super(props);
    this.state={
      name: '',
      password: '',
    }
  }

  render() {
    return (
      <div style={{width: '240px'}}>
        <input name="name" type="text" value={this.state.name} onInput={(e) => {console.log('姓名：', e.target.value)}} />
        <input name="password" type="password" value={this.state.password} onInput={(e) => {console.log('密码：',e.target.value)}} />
        <button onClick={() => {console.log('click');}}>登录</button>
      </div>
    )
  }
}
