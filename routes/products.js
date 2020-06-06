var express = require('express');
var router = express.Router();
var productsController = require('../controllers/productsController')


router.get('/', productsController.list);
router.get('/create', productsController.index);
router.get('/:id', productsController.detail);
router.post('/', productsController.create);
router.get('/edit/:id', productsController.indexEdit);
router.put('/edit/:id', productsController.editProduct);
router.delete('/edit/:id', productsController.deleteProduct);

module.exports = router;