import action_types from './action-types';

let actions = {
  updateFeedback() {
    return {
      type: action_types.FEEDBACK_LOADED,
      data
    }
  }
};

module.exports = actions;
