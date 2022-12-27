const { Schema, model } = require('mongoose');
const handleMogooseError = require('../helpers/handleMongooseError');
const contactSchema = new Schema(
  {
    name: { type: String, required: [true, 'Set name for contact'], unique: true },
    email: { type: String, unique: true },
    phone: { type: String, unique: true },
    favorite: { type: Boolean, default: false },
  },
  { versionKey: false, timestamps: true }
);
contactSchema.post('save', handleMogooseError);
const Contact = model('contact', contactSchema);

const Joi = require('joi');
// ============JOI SCEMAS=================
const AddContactShema = Joi.object({
  name: Joi.string().min(3).max(30).required(),
  email: Joi.string()
    .email({ minDomainSegments: 2, tlds: { allow: ['com', 'net'] } })
    .required(),
  phone: Joi.string().required(),
  favorite: Joi.boolean(),
});
const updateFavoriteSchema = Joi.object({
  favorite: Joi.boolean().required(),
});
const schemas = {
  updateFavoriteSchema,
  AddContactShema,
};
// ============JOI SCEMAS=================

module.exports = {
  Contact,
  schemas,
};
