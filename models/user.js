const { Schema, model } = require('mongoose');
const handleMogooseError = require('../helpers/handleMongooseError');
const Joi = require('joi');
// eslint-disable-next-line no-useless-escape
const mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
const userChema = new Schema(
  {
    password: {
      type: String,
      required: [true, 'Password is required'],
      minlength: [6, 'Password must be at least 6 digits'],
    },
    email: {
      type: String,
      required: [true, 'Email is required'],
      match: mailformat,
      unique: true,
    },
    subscription: {
      type: String,
      enum: ['starter', 'pro', 'business'],
      default: 'starter',
    },
    token: {
      type: String,
      default: null,
    },
  },
  { versionKey: false, timestamps: true }
);
userChema.post('save', handleMogooseError);
const User = model('user', userChema);
// ==========JOI SCHEMA======================
const registerSchema = Joi.object({
  email: Joi.string().pattern(mailformat).required(),
  password: Joi.string().min(6).required(),
});
const loginSchema = Joi.object({
  email: Joi.string().pattern(mailformat).required(),
  password: Joi.string().min(6).required(),
});
const schemas = { registerSchema, loginSchema };
// ==========JOI SCHEMA======================
module.exports = { User, schemas };
