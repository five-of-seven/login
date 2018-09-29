const User = require('./index.js').UserIdPassword;


module.exports.createUser = function createUser(password) {
  return User.sync()
    .then(() => User.create({ password }), error => `Error in sync ${error.message}`)
    .then(user => user.get('userId'), error => `Error in create user ${error.message}`)
    .catch(error => error.message);
};

module.exports.getPassword = function getPassword(userId) {
  return User.findById(userId)
    .then(user => user.get('password'), error => error);
};

module.exports.doesPasswordMatch = function doesPasswordMatch(userId, password) {
  return User.findById(userId)
    .then(user => user.get('password') === password, error => error);
};
