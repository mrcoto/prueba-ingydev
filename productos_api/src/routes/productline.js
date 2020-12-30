const express = require('express');
const router = express.Router();
const lineController = require('./../controllers/productline')

router.get('/product_lines/:id', lineController.find);
router.get('/product_lines', lineController.list);

module.exports = router;
