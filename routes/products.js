var router = express.Router();
var usersController = require('../controllers/productsController')
var express = require('express');

router.get('/', productsController.list);
router.get('/create', productsController.index);
router.get('/:id', productsController.detail);
router.post('/', productsController.create);
router.get('/:id/edit', productsController.indexEdit);
router.put('/:id', productsController.editProduct);
router.delete('/:id', productsController.deleteProduct);

module.exports = router;