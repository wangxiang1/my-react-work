import React from 'react';
// import logo from './logo.svg';
import './App.css';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import BasicLayout from './layout/BasicLayout';
import WeiXinLayout from './layout/WeiXinLayout';
import Login from '../src/pages/Login';

function App(props) {
  return (
    <Provider store={props.store}>
      <Router>
        <Switch>
          <Route path="/weixin" component={WeiXinLayout} />
          <Route path="/login" component={Login} />
          <Route path="/" component={BasicLayout} />
        </Switch>
      </Router>
    </Provider>
  );
}

export default App;
