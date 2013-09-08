var each = require('each')
  , map = require('map')
  , Song = require('song')
  , request = require('superagent');


exports.fetch = fetch;


function fetch(username, callback) {
  var url = '/favorites/' + username;

  request
    .get(url)
    .set('Accept', 'application/json')
    .end(function (err, res) {

    if (err) return callback(err);

    var songs = map(res.body, function (song) {
      return new Song({
        title: song.title,
        artist: song.artist,
        postedAt: fromTimestamp(song.dateposted),
        likedAt: fromTimestamp(song.dateloved),
        likes: song.loved_count,
        thumbnail: song.thumb_url
      });
    });

    callback(null, songs);
  });
}



function fromTimestamp (timestamp) {
  return new Date(timestamp * 1000);
}