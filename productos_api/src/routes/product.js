const express = require('express');
const router = express.Router();
const productController = require('./../controllers/product')

router.get('/products/:id', productController.find);
router.get('/products', productController.paginate);

module.exports = router;
