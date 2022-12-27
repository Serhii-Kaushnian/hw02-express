const { HttpError } = require('../../helpers');
const { Contact } = require('../../models/contact');

const updateOneContact = async (req, res, next) => {
  const { id } = req.params;
  const updatedContact = await Contact.findByIdAndUpdate(id, req.body, { new: true });

  if (!updatedContact) {
    throw HttpError(404, 'Not found');
  }
  res.json(updatedContact);
};
module.exports = updateOneContact;
