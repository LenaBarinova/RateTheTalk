let httpGetAsync = function(theUrl, callback) {
  let xmlHttp = new XMLHttpRequest();
  xmlHttp.onreadystatechange = () => {
    if (xmlHttp.readyState === 4 && xmlHttp.status === 200) {
      callback(JSON.parse(xmlHttp.responseText));
    }
  }
  xmlHttp.open("GET", theUrl, true);
  xmlHttp.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
  xmlHttp.send(null);
};

let api = {
  getFeedback(callback) {
    let stats = [];
    httpGetAsync('https://86x058sx60.execute-api.us-west-2.amazonaws.com/prod/stats', (response) => {
      if (response && response.stats) {
        stats = response.stats.map(obj => {
          return [
            obj.count.toString() + ' say ' + obj.response,
            obj.count,
            obj.response === 'OK' ? 'color:#8cd790' : 'color:#f06292'
          ]
        });
      }
      stats.unshift(['Feedback', 'Count', { 'role': 'style' }]);
      callback(stats);
    });
  }
};

module.exports = api;
