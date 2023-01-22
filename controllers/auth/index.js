const register = require('./register');
const login = require('./login');
const getCurrent = require('./getCurrent');
const logout = require('./logout');
const updateSubscription = require('./updateSubscription');
const updateAvatar = require('./updateAvatar');
const verify = require('./verify');
const resendVerificationEmail = require('./resendVerificationEmail');
module.exports = {
  register,
  login,
  getCurrent,
  logout,
  updateSubscription,
  updateAvatar,
  verify,
  resendVerificationEmail,
};
