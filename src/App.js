import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Main from './components/main';
import Routes from './components/routes';
import Menu from './components/menu/menu';

class App extends Component {
  render() {
    return(
      <div className="App container">
        <Menu />
        <Main />
      </div>
    );
  }
}

export default App;
