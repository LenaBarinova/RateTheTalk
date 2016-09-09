import action_types from './action-types';
import api from './api';

const POLLING_INTERVAL = 60000;

// Once feedback is received - updated state for received stats to be shown on a chart
function receiveFeedback(stats) {
  return {
    type: action_types.RECEIVE_FEEDBACK,
    data: stats
  }
};

// Calling API Get to receive feedback stats
function fetchFeedback() {
  return dispatch => {
    return api.getFeedback(
      (stats) => dispatch(receiveFeedback(stats))
    );
  };
};

// Invoking fetchFeedback every X seconds
export function pollFeedback() {
  return dispatch => {
    dispatch(fetchFeedback());
    setInterval(() => {
      dispatch(fetchFeedback());
    }, POLLING_INTERVAL);
  };
};