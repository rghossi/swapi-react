import React, { Component } from 'react';
import FilmContainer from '../films/FilmContainer';
import logo from './sw-logo.png';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to Swapi React</h2>
        </div>
        <div className="App-content">
          <FilmContainer />
        </div>
      </div>
    );
  }
}

export default App;
