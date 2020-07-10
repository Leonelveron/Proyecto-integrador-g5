var express = require('express');
var router = express.Router();
var productsController = require('../controllers/productsController');
var authMiddleware = require('../middlewares/authMiddleware');
var productCreateMiddleware = require('../middlewares/productCreateMiddleware')

router.get('/', productsController.list);
router.get('/create', productsController.index);
router.post('/create', productCreateMiddleware, productsController.create);
router.get('/:id', productsController.detail);
router.get('/edit/:id', productsController.indexEdit);
router.put('/edit/:id', productsController.editProduct);
router.delete('/edit/:id', productsController.deleteProduct);

module.exports = router;