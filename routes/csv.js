const express = require('express');
const router = express.Router();
const { getDadosInmet } = require('../controllers/csvController');

router.get('/dados-inmet', getDadosInmet);

module.exports = router;
