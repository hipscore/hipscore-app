var each = require('each')
  , map = require('map')
  , Song = require('song')
  , request = require('superagent');


exports.fetch = fetch;


function fetch(username, callback) {
  var url = '/favorites/' + username + '/';

  request
    .get(url)
    .set('Accept', 'application/json')
    .end(function (err, res) {

    if (err) return callback(err);

    var songs = map(res.body, function (item) {
      var song = item.fields;

      return new Song({
        title: song.title,
        artist: song.artist,
        postedAt: new Date(song.dateposted),
        thumbnail: song.thumb_url
      });
    });

    callback(null, songs);
  });
}