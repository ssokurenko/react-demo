import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">React Demo</h1>
        </header>
        <p className="App-intro">
          An application powered by React.
        </p>
        <p>
          To run the local server use command: 'npm start', to build the app: 'npm run build'.
        </p>
      </div>
    );
  }
}

export default App;
