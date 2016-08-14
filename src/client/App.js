import React, { Component } from 'react';
import './App.css';
import Feedback from './Feedback';
import { connect } from 'react-redux';

class App extends Component {
  render() {
    const content = this.props.content;
    // const fetchFeedback = this.props.fetchFeedback;
    // fetchFeedback();

    return (
      <div className="App">
        <div className="App-header">
          <h2>Feedback for "Serverless architecture" talk</h2>
          <em>by Lena Barinova @ATC-W, 12th September, 2016</em>
        </div>
        <Feedback data={content}/>
      </div>
    );
  }
}

module.exports = connect(
  (state) => ({ content: state.content })
)(App);
