// controllers/generalController.js
const express = require('express');
const router = express.Router();

// Importa as funções principais de cada controller
const { getProdutosFormulados } = require('./agrofitController');
const { getDadosInmet }         = require('./csvController');
const { getClima }              = require('./environmentController');
const { getVegetacao }          = require('./satvegController');
const { getSensorData }         = require('./sensorController');

router.get('/geral', async (req, res) => {
  const { lat, lon } = req.query;

  try {
    // Chama tudo em paralelo
    const [
      agrofitData,
      csvData,
      climaData,
      satvegData,
      sensorData
    ] = await Promise.all([
      getProdutosFormulados(req),
      getDadosInmet(req),
      getClima(req),
      getVegetacao(req),
      getSensorData(req)
    ]);

    // Retorna tudo no mesmo JSON
    res.json({
      agrofit: agrofitData,
      csv: csvData,
      environment: climaData,
      satveg: satvegData,
      sensor: sensorData
    });

  } catch (err) {
    console.error('Erro no endpoint geral:', err);
    res.status(500).json({ error: 'Houve um problema ao agregar as APIs.' });
  }
});

module.exports = router;