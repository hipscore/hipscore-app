var model = require('model');


module.exports = model('Song')
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
      return this.likes() / (this.postedAt() - this.likedAt());
    };
  });
  return Model;
}


