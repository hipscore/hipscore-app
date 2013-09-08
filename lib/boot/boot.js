var body = document.body
  , each = require('each')
  , map = require('map')
  , User = require('user')
  , Router = require('router')
  , Song = require('song')
  , SongList = require('song-list');



var songList = new SongList();


var router = new Router()
  .on('/:username', load);


body.appendChild(songList.el);


function load (context, next) {
  var username = context.params.username;
  songList.fetch(username);
}

