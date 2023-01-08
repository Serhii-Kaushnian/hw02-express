const path = require('path');
const fs = require('fs/promises');
const avatarDir = path.join(__dirname, '../', 'public', 'avatars');
const relocateAvatar = async (req, res, next) => {
  const { path: tempUpload, originalname } = req.file;
  const resultUpload = path.join(avatarDir, originalname);
  await fs.rename(tempUpload, resultUpload);
  req.avatarPath = path.join('avatars', originalname);
  next();
};

module.exports = relocateAvatar;
