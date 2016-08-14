import action_types from './action-types';

const initialState = {
  content: [['Feedback', 'Count', { 'role': 'style' }], ['OK', 0], ['KO', 0]]
};

let reducer = function (state = initialState, action) {
  switch (action.type) {
    case action_types.RECEIVE_FEEDBACK:
      return {
        content: action.data
      };
    default:
      return state;
  }
};

module.exports = reducer;