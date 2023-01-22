const { Contact } = require('../../models/contact');

const getFavorite = async (req, res) => {
  const { _id: owner } = req.user;
  const { page = 1, limit = 2, favorite } = req.query;
  const skip = (page - 1) * limit;
  const result = await Contact.find({ owner, favorite: { $in: favorite } }, '-createdAt -updatedAt', { skip, limit }).populate('owner', ' email');
  res.json(result);
};
module.exports = getFavorite;
