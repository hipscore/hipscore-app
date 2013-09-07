var dom = require('dom')
  , each = require('each')
  , map = require('map')
  , SongView = require('song-view')
  , template = require('./template.html');



function SongList (songs) {
  this.views = map(songs, function (song) { return new SongView(song); });
  var el = this.el = domify(template);
  each(this.views, function (view) {
    dom(el).append(view.el);
  });
}
