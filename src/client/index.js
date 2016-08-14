import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import createLogger from 'redux-logger';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import content from './reducer';
import thunkMiddleware from 'redux-thunk';
import { pollFeedback } from './actions';

const loggerMiddleware = createLogger();

const store = createStore(
  content,
  applyMiddleware(
    thunkMiddleware,
    loggerMiddleware
  )
);

store.dispatch(pollFeedback());

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
)
