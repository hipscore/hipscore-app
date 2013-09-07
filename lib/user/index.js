var model = require('model');


var User = module.exports = model('User')
  .attr('username')
  .attr('avatar');