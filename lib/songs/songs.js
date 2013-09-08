var song = require('song')
  , request = require('superagent');


exports.fetch = fetch;


function fetch(username, callback) {
  var url = '/favorites/' + username;

  request
    .get(url)
    .set('Accept', 'application/json')
    .end(function (err, res) {
    console.log(res);
  });
}