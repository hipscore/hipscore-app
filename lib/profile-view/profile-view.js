var domify = require('domify')
  , each = require('each')
  , reactive = require('reactive')
  , relative = require('relative-date')
  , template = require('./template.html')
  , User = require('user');


module.exports = ProfileView;


function ProfileView () {
  this.el = domify(template);
  this.user = new User();
  reactive(this.el, this.user, this);
}


ProfileView.prototype.fetch = function (username) {
  var self = this;

  User.get(username, function (err, user) {
    if (err) throw err;
    user = user.attrs;

    self.user.set({
      created: new Date(user.joined_ts * 1000),
      likes: user.favorites_count.item,
      followers: user.favorites_count.followers,
      username: user.username,
      avatar: user.userpic
    });
  });
};
