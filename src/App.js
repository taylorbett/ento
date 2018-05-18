import React, { Component } from 'react';
import './App.css';

import ExampleModule from './modules/ExampleModule';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">React-redux Template</h1>
        </header>
        <ExampleModule />
      </div>
    );
  }
}

export default App;
