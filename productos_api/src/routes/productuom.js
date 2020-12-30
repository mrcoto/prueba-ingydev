const express = require('express');
const router = express.Router();
const uomController = require('./../controllers/productuom')

router.get('/:id', uomController.find);
router.get('/', uomController.list);

module.exports = router;
