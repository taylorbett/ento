import React, { Component } from 'react';
import './bootstrap-grid.min.css';
import './App.css';

import ShiftDemo from './modules/ShiftDemo';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Ento FED Task</h1>
        </header>
        <div className="App-container">
          <ShiftDemo />
        </div>
      </div>
    );
  }
}

export default App;
