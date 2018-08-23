import React, { Component } from 'react';
import './App.css';
import Main from './components/main';
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
