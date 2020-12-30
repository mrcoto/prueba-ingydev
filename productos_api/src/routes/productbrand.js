const express = require('express');
const router = express.Router();
const brandController = require('./../controllers/productbrand')

router.get('/brands/:id', brandController.find);
router.get('/brands', brandController.list);

module.exports = router;
