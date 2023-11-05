var express = require('express');
var router = express.Router();
var productController = require('../controllers/productsController');


router.get('/', productController.getAll);

router.get('/:id', productController.getById);

router.post('/', productController.create);

router.put('/id', productController.update);

router.delete('/:id', productController.delete);

module.exports = router;