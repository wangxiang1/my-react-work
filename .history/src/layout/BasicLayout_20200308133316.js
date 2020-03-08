import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import User from '../pages/User';


export default class BasicLayout extends Component {
  render() {
    return (
      <div className="boder">
        <h1>BasicLayout</h1>
        <Switch>
          <Route excat path="/" component={User} />
          <Route path="/user" component={User} />
          <Route path="/user" component={User} />
        </Switch> 
      </div>
    )
  }
}
