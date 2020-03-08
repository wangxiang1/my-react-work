import React, { Component } from 'react'
import {Switch} from "react-router-dom";
import PrivateRoute from '../PrivateRoute';
import WeiXinUser from '../pages/WeiXinUser';
import { connect } from 'react-redux';

@connect(
  state => ({login: state.login}),
)
class WeiXinLayout extends Component {
  render() {
    const {login: {isLogin}} = this.props;

    return (
      <div>
        <h1>WeiXin Layout</h1>
        <hr style={{color: '#777'}}/>
        <Switch>
          <PrivateRoute isLogin={isLogin} path="/user" component={WeiXinUser} />
        </Switch> 
      </div>
    )
  }
}

export default WeiXinLayout;