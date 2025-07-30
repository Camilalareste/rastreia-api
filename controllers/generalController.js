const agrofit = require('./agrofitController');
const csvApi  = require('./csvController');
const env     = require('./environmentController');
const satveg  = require('./satvegController');
const sensor  = require('./sensorController');

// Supondo que cada controller exporte uma função async tipo getData(req, res)
async function getAll(req, res) {
  try {
    const { lat, lon } = req.query;
    // dispara todas as promessas em paralelo
    const [agrofitData, csvData, envData, satvegData, sensorData] = await Promise.all([
      agrofit.getData(req),            // ou agrofit.getData(lat,lon)
      csvApi.getData(req),
      env.getClima(req),              // se tiver método específico
      satveg.getData(req),
      sensor.getData(req),
    ]);

    res.json({
      agrofit: agrofitData,
      csv:     csvData,
      environment: envData,
      satveg:  satvegData,
      sensor:  sensorData
    });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Deu ruim ao agregar APIs' });
  }
}

module.exports = { getAll };
