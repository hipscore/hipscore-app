var body = document.body
  , domify = require('domify')
  , each = require('each')
  , map = require('map')
  , ProfileView = require('profile-view')
  , query = require('query')
  , Router = require('router')
  , SongList = require('song-list')
  , template = require('./template.html');


var songList = new SongList()
  , profileView = new ProfileView();


var router = new Router()
  .on('/:username', load)
  .listen('/');


render();


router.go(window.location.pathname);


function load (context, next) {
  var username = context.params.username;
  songList.fetch(username);
  profileView.fetch(username);
}


function render () {
  var el = domify(template);
  query('#song-list', el).appendChild(songList.el);
  query('#profile-view', el).appendChild(profileView.el);
  body.appendChild(el);
}