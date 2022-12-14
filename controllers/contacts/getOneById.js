const { HttpError } = require('../../helpers');
const Contact = require('../../models/contact');

const getOneById = async (req, res, next) => {
  const { id } = req.params;
  const contact = await Contact.findById(id);
  if (!contact) {
    throw HttpError(404, 'Not found');
  }
  res.json(contact);
};
module.exports = getOneById;
