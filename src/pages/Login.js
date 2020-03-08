import React, { Component } from "react";
import { connect } from "react-redux";
import {Redirect} from 'react-router-dom';

@connect(
  state => ({login: state.login}),
  {
    loginSaga: userInfo => ({type: "LOGIN_SAGA", payload: userInfo})
  }
)
class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      password: ""
    };
  }

  render() {
    const {login: {isLogin}} = this.props;

    if(isLogin){
      return <Redirect to={{pathname: "/"}} />
    }else {
      return (
        <div style={{ width: "240px" }}>
          <input
            name="name"
            type="text"
            value={this.state.name}
            onChange={e => {
              this.setState({name: e.target.value})
            }}
          />
          <input
            name="password"
            type="password"
            value={this.state.password}
            onChange={e => {
              this.setState({password: e.target.value})
            }}
          />
          <button
            onClick={() => {
              const {name, password} = this.state;
              const {loginSaga} = this.props;
              loginSaga({name, password});
            }}
          >
            登录
          </button>
        </div>
      );
    }
  }
}

export default Login;
