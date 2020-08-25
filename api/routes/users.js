var express = require('express');
var router = express.Router();
var apiUsersController = require('../controllers/usersController');

router.get('/', apiUsersController.list);
router.get('/:id', apiUsersController.detail);

module.exports = router