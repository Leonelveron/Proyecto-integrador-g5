var express = require('express');
var router = express.Router();
var productsController = require('../controllers/productsController');
var authMiddleware = require('../middlewares/authMiddleware');
var guestMiddleware = require('../middlewares/guestMiddleware');


router.get('/', productsController.list);
router.post('/', productsController.create);
router.get('/create', authMiddleware, productsController.index);
router.get('/:id', productsController.detail);
router.get('/edit/:id',authMiddleware, productsController.indexEdit);
router.put('/edit/:id', productsController.editProduct);
router.delete('/edit/:id',authMiddleware, productsController.deleteProduct);

module.exports = router;