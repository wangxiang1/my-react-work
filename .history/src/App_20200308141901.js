import React from 'react';
// import logo from './logo.svg';
import './App.css';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import BasicLayout from './layout/BasicLayout';
import WeiXinLayout from './layout/WeiXinLayout';

function App() {
  return (
    <Provider store={this.props.store}>
      <Router>
        <Route path="/" exact component={BasicLayout} />
        <Route path="/weixin" component={WeiXinLayout} />
      </Router>
    </Provider>
  );
}

export default App;
