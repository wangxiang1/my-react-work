import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
import {store} from '../src/store';

function App() {
  return (
    <Provider store={store}>

    </Provider>
  );
}

export default App;
