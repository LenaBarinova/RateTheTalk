import React, { Component } from 'react';
import './App.css';
import Feedback from './Feedback';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h2>Feedback for "Serverless architecture" talk</h2>
          <em>by Lena Barinova @ATC-W, 12th September, 2016</em>
        </div>
        <Feedback/>
      </div>
    );
  }
}

export default App;
