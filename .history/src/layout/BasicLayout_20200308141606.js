import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import User from '../pages/User';
import Home from '../pages/Home';


export default class BasicLayout extends Component {
  render() {
    return (
      <div className="boder">
        <h1>BasicLayout</h1>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/user" component={User} />
          <Route path="/login" component={Login} />
        </Switch> 
      </div>
    )
  }
}
