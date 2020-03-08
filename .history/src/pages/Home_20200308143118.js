import React, { Component } from "react";
import { connect } from "react-redux";
import {Link} from "react-router-dom";

@connect(
  state => state
)
class Home extends Component {

  componentDidMount(){
    const {dispatch} = this.props;
    dispatch({ type: 'WATCH_GET_PROJECT', payload: { projectName: 'tap4fun' } });
  }
  
  render() {
    console.log(this.props)
    return (
      <div>
        <h1 style={{colot: 'blue'}}>Home Page</h1>
        <h2>The project name is : { this.props.state.weixin.projectName }</h2>
        <Link to="/user">用户</Link>
      </div>
    );
  }
}

export default Home;