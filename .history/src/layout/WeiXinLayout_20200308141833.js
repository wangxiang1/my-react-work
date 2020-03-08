import React, { Component } from 'react'

export default class WeiXinLayout extends Component {
  render() {
    return (
      <div>
        <h1>WeiXin Layout</h1>
        <hr style={{color: '#777'}}/>
        <Switch>
          <Route path="/user" component={User} />
        </Switch> 
      </div>
    )
  }
}
