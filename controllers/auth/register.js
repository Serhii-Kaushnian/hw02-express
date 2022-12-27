const { User } = require('../../models/user');
const { HttpError } = require('../../helpers');
const register = async (req, res, next) => {
  const { email } = req.body;
  console.log('req.body: ', req.body);
  const user = await User.findOne({ email });
  if (user) {
    throw HttpError(409, 'Email is already in use');
  }
  const newUser = await User.create(req.body);
  res.status(201).json({
    name: newUser.name,
    email: newUser.email,
  });
};
module.exports = register;
