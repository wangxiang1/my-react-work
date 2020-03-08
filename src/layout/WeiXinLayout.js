import React, { Component } from 'react'
import {Switch, Route} from "react-router-dom";
import WeiXinUser from '../pages/WeiXinUser';


export default class WeiXinLayout extends Component {
  render() {
    return (
      <div>
        <h1>WeiXin Layout</h1>
        <hr style={{color: '#777'}}/>
        <Switch>
          <Route path="/user" component={WeiXinUser} />
        </Switch> 
      </div>
    )
  }
}
