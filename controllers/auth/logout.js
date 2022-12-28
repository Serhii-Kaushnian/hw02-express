const { User } = require('../../models/user');

const login = async (req, res, next) => {
  const { _id } = req.user;
  await User.findByIdAndUpdate(_id, { token: null });
  res.status(204);
};
module.exports = login;
