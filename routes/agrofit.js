// routes/agrofit.js
const express = require('express');
const router = express.Router();
const agrofitController = require('../controllers/agrofitController');

router.get('/produtos-formulados', agrofitController.getProdutosFormulados);

module.exports = router;