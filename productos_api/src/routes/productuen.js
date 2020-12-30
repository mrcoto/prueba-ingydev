const express = require('express');
const router = express.Router();
const uenController = require('./../controllers/productuen')

router.get('/uens/:id', uenController.find);
router.get('/uens', uenController.list);

module.exports = router;
