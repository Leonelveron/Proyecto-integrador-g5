var express = require('express');
var router = express.Router();
var nuevoProductoController = require('../controllers/nuevoProductoController')

/* GET productos pages. */
router.get('/', nuevoProductoController.nuevoProducto);

module.exports = router;