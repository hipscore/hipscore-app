var domify = require('domify')
  , each = require('each')
  , map = require('map')
  , songs = require('songs')
  , SongView = require('song-view')
  , template = require('./template.html');


module.exports = SongList;


function SongList (songs) {
  this.update(songs);
  this.render();
}


SongList.prototype.update = function (songs) {
  this.songs = songs || [];
  this.views = map(this.songs, function (song) { return new SongView(song); });
};


SongList.prototype.render = function () {
  this.reset();
  if (!this.el) this.el = domify(template);
  var el = this.el;
  each(this.views, function (view) {
    el.appendChild(view.el);
  });
};


SongList.prototype.reset = function () {
  each(this.views, function (view) {
    view.el.remove();
  });
};


SongList.prototype.fetch = function (username) {
  var self = this;
  songs.fetch(username, function (err, songs) {
    if (err) throw err;
    self.update(songs);
    self.render();
  });
};