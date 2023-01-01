const { HttpError } = require('../../helpers');
const { Contact } = require('../../models/contact');

const addOneContact = async (req, res) => {
  const { _id: owner } = req.user;

  const newContact = await Contact.create({ ...req.body, owner });
  if (!newContact) {
    throw HttpError(404, 'Not found');
  }
  res.status(201).json(newContact);
};
module.exports = addOneContact;
