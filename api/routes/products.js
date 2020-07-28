var express = require('express');
var router = express.Router();
var apiProductsController = require('../controllers/productsController');

router.get('/', apiProductsController.list);
router.get('/:id', apiProductsController.detail);

module.exports = router
