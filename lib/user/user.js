var model = require('model');


var User = module.exports = model('User')
  .route('/user')
  .attr('created')
  .attr('likes')
  .attr('followers')
  .attr('username')
  .attr('avatar');


User.primaryKey = 'username';