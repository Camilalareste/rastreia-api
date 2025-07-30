const express = require('express');
const router = express.Router();
const { getData } = require('../controllers/agrofitController');

router.get('/', async (req, res) => {
  const data = await getData(req);
  res.json(data);
});

module.exports = router;

