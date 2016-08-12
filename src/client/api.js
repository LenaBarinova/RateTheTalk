let api = {
  getFeedback() {
    return [ 
        ['Feedback', 'Count', { 'role': 'style' }],
        ['OK', 20, 'color:#8cd790'],
        ['KO', 5, 'color:#f06292']];
  }
};
module.exports = api;