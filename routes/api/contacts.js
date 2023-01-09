const express = require('express');
const router = express.Router();

const { getAll, getOneById, addOneContact, deleteOneContact, updateOneContact, updateFavorite, getFavorite } = require('../../controllers/contacts');

const controllerWrapper = require('../../helpers/controllerWrapper');

const { validateBody, isValidId, autheticate } = require('../../middlewares');

const { schemas } = require('../../models/contact');

router.get('/', autheticate, controllerWrapper(getAll), controllerWrapper(getFavorite));

router.get('/:id', autheticate, isValidId, controllerWrapper(getOneById));

router.post('/', autheticate, validateBody(schemas.AddContactShema), controllerWrapper(addOneContact));

router.delete('/:id', autheticate, isValidId, controllerWrapper(deleteOneContact));

router.patch('/:id/favorite', autheticate, isValidId, validateBody(schemas.updateFavoriteSchema), controllerWrapper(updateFavorite));

router.put('/:id', autheticate, isValidId, validateBody(schemas.AddContactShema), controllerWrapper(updateOneContact));

module.exports = router;
