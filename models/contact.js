const { Schema, model } = require('mongoose');
const handleMogooseError = require('../helpers/handleMongooseError');
const Joi = require('joi');

const contactSchema = new Schema(
  {
    name: { type: String, required: [true, 'Set name for contact'] },
    email: { type: String, required: [true, 'Set email for contact'] },
    phone: { type: String, required: [true, 'Set phone for contact'] },
    favorite: { type: Boolean, default: false },
    avatarURL: { type: String },
    owner: { type: Schema.Types.ObjectId, ref: 'user', required: true },
  },
  { versionKey: false, timestamps: true }
);
contactSchema.post('save', handleMogooseError);
const Contact = model('contact', contactSchema);

// ============JOI SCHEMAS=================
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
// ============JOI SCHEMAS=================

module.exports = {
  Contact,
  schemas,
};
