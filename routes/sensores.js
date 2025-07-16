const express = require('express');
const router = express.Router();
const sensorController = require('../controllers/sensorController');

router.get('/solo', sensorController.getSensorData);
router.post('/manual', sensorController.postManualData);
router.post('/raspberry', sensorController.postSensorFromRaspberry);

module.exports = router;