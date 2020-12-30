const express = require('express');
const router = express.Router();
const categoryController = require('./../controllers/productcategory')

router.get('/categories/:id', categoryController.find);
router.get('/categories', categoryController.list);

module.exports = router;
