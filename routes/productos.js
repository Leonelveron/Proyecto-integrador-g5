var express = require('express');
var router = express.Router();
var productosController = require('../controllers/productosController')

/* GET productos pages. */
router.get('/', productosController.nuevoProducto);

module.exports = router;