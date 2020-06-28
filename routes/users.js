var express = require('express');
var fs = require('fs');
var router = express.Router();
var usersController = require('../controllers/usersController');
var multer = require('multer');
var path = require('path');
var authMiddleware = require('../middlewares/authMiddleware');
var guestMiddleware = require('../middlewares/guestMiddleware');
var loginMiddleware = require('../middlewares/checkLoginMiddlewate');
var registerMiddleware = require('../middlewares/checkRegisterMiddleware');
var userEditMiddleware = require('../middlewares/userEditMiddleware');
let { check, validationResult, body } = require('express-validator');

var storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, './public/images')
    },
    filename: function (req, file, cb) {
        cb(null, file.fieldname + '-' + Date.now() + path.extname(file.originalname))
    }
})

var upload = multer({ storage: storage })

router.get('/',guestMiddleware, usersController.index);
router.post('/', upload.any(), registerMiddleware , usersController.register);
router.post('/login', loginMiddleware, usersController.login);
router.get('/check', usersController.check);
router.get('/myAccount/:id', authMiddleware, usersController.myAccount);
router.get('/myAccount/edit/:id',authMiddleware, usersController.updateView);
router.put('/myAccount/edit/:id', userEditMiddleware , upload.any(), usersController.update);
router.delete('/myAccount/:id', usersController.delete);



module.exports = router;
