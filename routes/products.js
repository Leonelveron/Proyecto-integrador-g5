var express = require('express');
var router = express.Router();
var productsController = require('../controllers/productsController');
var authMiddleware = require('../middlewares/authMiddleware');
var productCreateMiddleware = require('../middlewares/productCreateMiddleware');
var productEditMiddleware = require('../middlewares/productEditMiddleware');

router.get('/', productsController.list);
router.get('/create', authMiddleware, productsController.create);
router.post('/create', productCreateMiddleware, productsController.created);
router.get('/:id', productsController.detail);
router.get('/edit/:id', authMiddleware, productsController.indexEdit);
router.put('/edit/:id', productEditMiddleware, productsController.editProduct);
router.delete('/edit/:id', productsController.deleteProduct);
router.get('/brands/:id', productsController.brands);

module.exports = router;