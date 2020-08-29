var express = require('express');
var router = express.Router();
var carritoController = require('../controllers/carritoController')
var authMiddleware = require('../middlewares/authMiddleware')

/* GET shopping cart page. */
router.post('/create', carritoController.create);

router.get('/', authMiddleware, carritoController.cart);

router.post('/add/:id', carritoController.add);

router.post('/delete/:id', carritoController.delete);




/*router.get('/:id', authMiddleware, carritoController.cart);*/

module.exports = router;