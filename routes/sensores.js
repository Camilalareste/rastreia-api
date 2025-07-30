const express = require('express');
const router = express.Router();
const { getSensorData } = require('../controllers/sensorController');

router.get('/', getSensorData);

let registros = [];

router.post('/drone', (req, res) => {
  const { origem, latitude, longitude, imagemBase64 } = req.body;
  registros.push({ origem: origem || 'drone', latitude, longitude, data: new Date(), alerta: null });
  res.json({ status: 'Imagem de drone registrada', registros });
});

router.post('/satelite', (req, res) => {
  const { origem, linkImagem, detalhes } = req.body;
  registros.push({ origem: origem || 'satelite', linkImagem, detalhes, data: new Date(), alerta: null });
  res.json({ status: 'Imagem de satélite registrada', registros });
});

router.get('/relatorio', (req, res) => {
  res.json(registros);
});

module.exports = router;
