const { HttpError } = require('../../helpers');
const { Contact } = require('../../models/contact');

const addOneContact = async (req, res) => {
  console.log(req.avatarPath);
  const { _id: owner } = req.user;

  const newContact = await Contact.create({ ...req.body, owner, avatarURL: req.avatarPath });
  if (!newContact) {
    throw HttpError(404, 'Not found');
  }
  res.status(201).json(newContact);
};
module.exports = addOneContact;
