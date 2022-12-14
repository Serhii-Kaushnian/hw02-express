const express = require('express');
const router = express.Router();
const {
  getAll,
  getOneById,
  addOneContact,
  deleteOneContact,
  updateOneContact,
} = require('../../controllers/contacts');
const controllerWrapper = require('../../helpers/controllerWrapper');

const { validateBody } = require('../../middlewares');

const { contactShema } = require('../../schemas');

router.get('/', controllerWrapper(getAll));

router.get('/:id', controllerWrapper(getOneById));

router.post('/', validateBody(contactShema), controllerWrapper(addOneContact));

router.delete('/:id', controllerWrapper(deleteOneContact));

router.put('/:id', validateBody(contactShema), controllerWrapper(updateOneContact));

module.exports = router;
