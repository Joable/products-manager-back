var express = require('express');
var router = express.Router();
var usersController = require('../controllers/usersController');


router.get('/', usersController.getAll);

router.post('/signin', usersController.create);

module.exports = router;