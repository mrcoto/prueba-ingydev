const express = require('express');
const router = express.Router();
const manufacturerTypeController = require('./../controllers/productmanufacturertype')

router.get('/manufacturer_types/:id', manufacturerTypeController.find);
router.get('/manufacturer_types', manufacturerTypeController.list);

module.exports = router;
