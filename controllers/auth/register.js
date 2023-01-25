const { User } = require('../../models/user');
const { HttpError, sendEmail } = require('../../helpers');
const { nanoid } = require('nanoid');
const bcrypt = require('bcrypt');
const gravatar = require('gravatar');
const { BASE_URL } = process.env;
const register = async (req, res, next) => {
  const { email, password } = req.body;
  const user = await User.findOne({ email });
  if (user) {
    throw HttpError(409, 'Email is already in use');
  }
  const hashPassword = await bcrypt.hash(password, 10);
  const avatar = gravatar.url(email);

  const verificationToken = nanoid();

  const newUser = await User.create({ ...req.body, password: hashPassword, avatarURL: avatar, verificationToken });

  const verificationEmail = {
    to: email,
    subject: 'Verify your email',
    html: `<a target="_blank" href="${BASE_URL}/api/auth/verify/${verificationToken}">"Click to verify email"</a>`,
  };

  await sendEmail(verificationEmail);

  res.status(201).json({
    email: newUser.email,
    subscription: newUser.subscription,
  });
};
module.exports = register;
