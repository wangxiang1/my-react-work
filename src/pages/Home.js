import React, { Component } from "react";
import { connect } from "react-redux";
import {Link} from "react-router-dom";

@connect(
  state => state,
  {
    project: (value) => ({ type: 'WATCH_GET_PROJECT', payload: { projectName: value } })
  }
)
class Home extends Component {
  constructor(props) {
    super(props);
    this.state={
      value: ''
    }
  }
  

  componentDidMount(){
    const {project} = this.props;
    project('tap4fun');
  }
  
  render() {
    // console.log(this.props)
    return (
      <div>
        <h1 style={{colot: 'blue'}}>Home Page</h1>
        <h2>The project name is : { this.props.weixin.projectName || '1111' }</h2>
        <Link to="/user">用户</Link>
        <input 
          value={this.state.value} 
          onChange={(e) => {
            this.setState({value: e.target.value})
            const {project} = this.props;
            project(e.target.value);
          }} 
        />
      </div>
    );
  }
}

export default Home;