//import action_types from './action-types';
import api from './api';

const initialState = {
  content: api.getFeedback() // loads feedback
};

let reducer = function (state = initialState, action) {
    return state;
};

module.exports = reducer;