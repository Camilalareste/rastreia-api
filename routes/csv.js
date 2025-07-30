// routes/csv.js
const express = require('express');
const router = express.Router();
const csvController = require('../controllers/csvController');

router.get('/dados-inmet', csvController.getDadosInmet);

module.exports = router;
