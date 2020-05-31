var express = require('express');
var router = express.Router();
var productsController = require('../controllers/productsController')


router.get('/', productsController.list);
router.get('/create', productsController.index);
router.get('/:id', productsController.detail);
router.post('/', productsController.create);
router.get('/:id/edit', productsController.indexEdit);
router.put('/:id', productsController.editProduct);
router.delete('/:id', productsController.deleteProduct);

module.exports = router;