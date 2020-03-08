import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
import {store} from '../src/store';
import BasicLayout from './layout/BasicLayout';

function App() {
  return (
    <Provider store={store}>
      <Router>
        <BasicLayout/>
      </Router>
    </Provider>
  );
}

export default App;
