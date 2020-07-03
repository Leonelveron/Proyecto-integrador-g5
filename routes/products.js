var express = require('express');
var router = express.Router();
var productsController = require('../controllers/productsController');
var authMiddleware = require('../middlewares/authMiddleware');
var productCreateMiddleware = require('../middlewares/productCreateMiddleware')

router.get('/', productsController.list);
router.get('/create', authMiddleware, productsController.index);
router.post('/create', productCreateMiddleware, productsController.create);
router.get('/:id', productsController.detail);
router.get('/edit/:id',authMiddleware, productsController.indexEdit);
router.patch('/edit/:id', productsController.editProduct);
router.delete('/edit/:id',authMiddleware, productsController.deleteProduct);

module.exports = router;