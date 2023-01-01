const { Contact } = require('../../models/contact');

const getAll = async (req, res, next) => {
  const { _id: owner } = req.user;
  const { page = 1, limit = 2, favorite } = req.query;
  if (favorite) {
    next();
    return;
  }
  const skip = (page - 1) * limit;
  const result = await Contact.find({ owner }, '-createdAt -updatedAt', { skip, limit }).populate('owner', ' email');
  res.json(result);
};
module.exports = getAll;
