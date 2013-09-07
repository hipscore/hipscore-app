var body = document.body
  , each = require('each')
  , map = require('map')
  , User = require('user')
  , Song = require('song')
  , SongList = require('song-list');


var user = new User(window.user);


var songs = map(window.songs, function (song) { return new Song(song); });


var songList = new SongList(songs);


