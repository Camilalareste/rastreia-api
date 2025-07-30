const express = require('express');
const router = express.Router();

const { getClima } = require('../controllers/environmentController');
const { getAgrofit } = require('../controllers/agrofitController');
const { getSatveg } = require('../controllers/satvegController');
const { getSensor } = require('../controllers/sensorController');
const { getCsv } = require('../controllers/csvController');

router.get('/geral', async (req, res) => {
  const { lat, lon } = req.query;

  try {
    const [clima, agrofit, satveg, sensor, csv] = await Promise.all([
      getClima({ lat, lon }),
      getAgrofit({ lat, lon }),
      getSatveg({ lat, lon }),
      getSensor({ lat, lon }),
      getCsv({ lat, lon })
    ]);

    res.json({ clima, agrofit, satveg, sensor, csv });
  } catch (e) {
    console.error('Erro na rota /geral:', e);
    res.status(500).json({ error: 'Erro ao agregar dados' });
  }
});

module.exports = router;
