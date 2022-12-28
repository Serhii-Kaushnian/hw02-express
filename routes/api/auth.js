const express = require('express');
const router = express.Router();
const controllerWrapper = require('../../helpers/controllerWrapper');
const { register, login, getCurrent, logout, updateSubscription } = require('../../controllers/auth');
const { validateBody, autheticate } = require('../../middlewares');

const {
  schemas: { registerSchema, loginSchema },
} = require('../../models/user');

router.post('/register', validateBody(registerSchema), controllerWrapper(register));

router.post('/login', validateBody(loginSchema), controllerWrapper(login));

router.get('/current', autheticate, controllerWrapper(getCurrent));

router.post('/logout', autheticate, controllerWrapper(logout));

router.patch('/', autheticate, controllerWrapper(updateSubscription));

module.exports = router;
