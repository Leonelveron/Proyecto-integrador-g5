var express = require('express');
var router = express.Router();
var carritoController = require('../controllers/carritoController')

/* GET shopping cart page. */
router.get('/', carritoController.carrito);

module.exports = router;