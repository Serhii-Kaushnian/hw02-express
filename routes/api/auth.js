const express = require('express');
const router = express.Router();
const controllerWrapper = require('../../helpers/controllerWrapper');
const { register, login, getCurrent, logout, updateSubscription, updateAvatar } = require('../../controllers/auth');
const { validateBody, autheticate, upload } = require('../../middlewares');

const {
  schemas: { registerSchema, loginSchema },
} = require('../../models/user');

router.post('/register', validateBody(registerSchema), controllerWrapper(register));

router.post('/login', validateBody(loginSchema), controllerWrapper(login));

router.get('/current', autheticate, controllerWrapper(getCurrent));

router.post('/logout', autheticate, controllerWrapper(logout));

router.patch('/', autheticate, controllerWrapper(updateSubscription));

router.patch('/avatars', autheticate, upload.single('avatar'), controllerWrapper(updateAvatar));

module.exports = router;
