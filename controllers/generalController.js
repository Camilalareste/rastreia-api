const express = require('express');
const router = express.Router();

const { getClima } = require('./environmentController');
const { getAgrofit } = require('./agrofitController');
const { getSatveg } = require('./satyegController');
const { getSensor } = require('./sensorController');
const { getCsv } = require('./csvController');

router.get('/route', async (req, res) => {
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
    console.error(e);
    res.status(500).json({ error: 'Erro ao agregar dados' });
  }
});

module.exports = router;
const generalRouter = require('./controllers/generalController');
app.use('/api', generalRouter);
