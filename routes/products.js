var express = require('express');
var router = express.Router();
var productsController = require('../controllers/productsController');
var authMiddleware = require('../middlewares/authMiddleware');
var productCreateMiddleware = require('../middlewares/productCreateMiddleware');
var productEditMiddleware = require('../middlewares/productEditMiddleware');
var multer = require('multer');
var path = require('path');

var storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, './public/images')
    },
    filename: function (req, file, cb) {
        cb(null, file.fieldname + '-' + Date.now() + path.extname(file.originalname))
    }
})

var upload = multer({ storage: storage })

router.get('/', productsController.list);
router.get('/create', authMiddleware, productsController.index);
router.post('/create',upload.any(), productCreateMiddleware, productsController.create);
router.get('/:id', productsController.detail);
router.get('/edit/:id', authMiddleware, productsController.indexEdit);
router.put('/edit/:id', productEditMiddleware, productsController.editProduct);
router.delete('/edit/:id', productsController.deleteProduct);
router.get('/brands/:id', productsController.brands);

module.exports = router;