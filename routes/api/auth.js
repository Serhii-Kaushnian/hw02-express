const express = require('express');
const router = express.Router();
const controllerWrapper = require('../../helpers/controllerWrapper');
const { register } = require('../../controllers/auth');
const { validateBody } = require('../../middlewares');

const {
  schemas: { registerSchema },
} = require('../../models/user');

router.post('/register', validateBody(registerSchema), controllerWrapper(register));

module.exports = router;
