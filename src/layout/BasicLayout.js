import React, { Component } from 'react';
import { Switch, Link } from 'react-router-dom';
import PrivateRoute from '../PrivateRoute';
import User from '../pages/User';
import Home from '../pages/Home';
import { connect } from 'react-redux';

@connect(
  state => ({login: state.login}),
)
class BasicLayout extends Component {
  render() {
    const {login: {isLogin}} = this.props;

    return (
      <div className="boder">
        <div className="layoutHeader">
            头部
        </div>
        <div className="layoutContent">
          <Switch>
            <PrivateRoute isLogin={isLogin} exact path="/" component={Home} />
            <PrivateRoute isLogin={isLogin} path="/user" component={User} />
          </Switch>
        </div>
        <div className="layoutBottom">
          <Link to="/">首页</Link>
          &nbsp;&nbsp;
          <Link to="/login">登录</Link>
          &nbsp;&nbsp;
          <Link to="/user">用户</Link>
          &nbsp;&nbsp;
          <Link to="/weixin/user">微信用户</Link>
        </div>
      </div>
    )
  }
}

export default BasicLayout;