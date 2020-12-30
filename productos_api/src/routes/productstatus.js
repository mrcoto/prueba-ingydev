const express = require('express');
const router = express.Router();
const statusController = require('./../controllers/productstatus')

router.get('/product_statuses/:id', statusController.find);
router.get('/product_statuses', statusController.list);

module.exports = router;
