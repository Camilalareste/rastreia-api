const express = require('express');
const router = express.Router();
const satvegController = require('../controllers/satvegController');

router.get('/', satvegController.getSatvegData);

module.exports = router;