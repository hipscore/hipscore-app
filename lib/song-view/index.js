var domify = require('domify')
  , reactive = require('reactive')
  , template = require('./template.html');


module.exports = SongView


function SongView (song) {
  this.model = song;
  this.el = domify(template);
  this.view = reactive(this.el, song, this);
}


