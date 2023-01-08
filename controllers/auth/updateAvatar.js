const { User } = require('../../models/user');
const path = require('path');
const fs = require('fs/promises');
const avatarDir = path.join(__dirname, '../../', 'public', 'avatars');
const { resizeAvatar } = require('../../helpers');
const updateAvatar = async (req, res, next) => {
  const { _id } = req.user;
  const { path: tempUpload, originalname } = req.file;

  await resizeAvatar(tempUpload);

  const avatarName = `${_id}_${originalname}`;
  const resultUpload = path.join(avatarDir, avatarName);
  await fs.rename(tempUpload, resultUpload);
  const avatarURL = path.join('avatars', avatarName);
  await User.findByIdAndUpdate(_id, { avatarURL });

  res.json({ avatarURL });
};
module.exports = updateAvatar;
