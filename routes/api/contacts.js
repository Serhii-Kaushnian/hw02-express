const express = require('express');
const router = express.Router();
const {
  getAll,
  getOneById,
  addOneContact,
  deleteOneContact,
  updateOneContact,
  updateFavorite,
} = require('../../controllers/contacts');
const controllerWrapper = require('../../helpers/controllerWrapper');

const { validateBody, isValidId } = require('../../middlewares');

const { schemas } = require('../../models/contact');

router.get('/', controllerWrapper(getAll));

router.get('/:id', isValidId, controllerWrapper(getOneById));

router.post('/', validateBody(schemas.AddContactShema), controllerWrapper(addOneContact));

router.delete('/:id', isValidId, controllerWrapper(deleteOneContact));

router.patch('/:id/favorite', isValidId, validateBody(schemas.updateFavoriteSchema), controllerWrapper(updateFavorite));

router.put('/:id', isValidId, validateBody(schemas.AddContactShema), controllerWrapper(updateOneContact));

module.exports = router;
