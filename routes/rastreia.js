const express = require('express');
const router = express.Router();
const { salvarRegistro, listarRegistros } = require('../controllers/rastreiaController');

router.post('/', salvarRegistro);
router.get('/', listarRegistros);

module.exports = router;
