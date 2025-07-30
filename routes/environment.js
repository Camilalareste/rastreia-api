const express = require('express');
const router = express.Router();
const environmentController = require('../controllers/environmentController');

router.get('/clima', environmentController.getClima);

module.exports = router;
