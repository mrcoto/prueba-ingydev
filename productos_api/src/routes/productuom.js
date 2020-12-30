const express = require('express');
const router = express.Router();
const uomController = require('./../controllers/productuom')

router.get('/uoms/:id', uomController.find);
router.get('/uoms', uomController.list);

module.exports = router;
