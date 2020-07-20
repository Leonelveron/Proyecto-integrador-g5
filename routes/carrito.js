var express = require('express');
var router = express.Router();
var carritoController = require('../controllers/carritoController')
var authMiddleware = require('../middlewares/authMiddleware')

/* GET shopping cart page. */
router.get('/', authMiddleware, carritoController.carrito);
router.get('/:id', authMiddleware, carritoController.cart);

module.exports = router;