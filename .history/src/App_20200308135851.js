import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
import BasicLayout from './layout/BasicLayout';

function App() {
  return (
    <Provider store={this.props.store}>
      <Router>
        <BasicLayout/>
      </Router>
    </Provider>
  );
}

export default App;
