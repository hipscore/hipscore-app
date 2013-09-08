var map = require('map')
  , model = require('model')
  , request = require('superagent');


var Song = module.exports = model('Song')
  .use(score)
  .attr('title')
  .attr('artist')
  .attr('postedAt')
  .attr('likes')
  .attr('likedAt')
  .attr('thumbnail');


function score (Model) {
  Model.on('construct', function (model) {
    model.score = function () {
      var time = (this.likedAt() - this.postedAt()) / 1000;
      time = time < 0 ? Math.abs(time) : time * 2;
      return Math.round(this.likes() / time * 10000);
    };
  });
  return Model;
}
