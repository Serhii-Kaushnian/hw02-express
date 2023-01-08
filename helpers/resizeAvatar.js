const Jimp = require('jimp');

const resizeAvatar = async fileName => {
  try {
    const image = await Jimp.read(fileName);
    image.resize(250, 250).write(`${fileName}`);
  } catch (err) {
    console.log(err);
  }
};
module.exports = resizeAvatar;
