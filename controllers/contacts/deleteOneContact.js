const { HttpError } = require('../../helpers');
const Contact = require('../../models/contact');

const deleteOneContact = async (req, res, next) => {
  const { id } = req.params;
  const newContactsList = await Contact.findByIdAndRemove(id);
  if (newContactsList === null) {
    throw HttpError(404, 'Not found');
  }
  res.json(newContactsList);
};
module.exports = deleteOneContact;
