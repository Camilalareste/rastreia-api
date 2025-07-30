const express = require('express');
const router = express.Router();
const { getData } = require('../controllers/environmentController');

router.get('/', async (req, res) => {
  const data = await getData(req);
  res.json(data);
});

module.exports = router;
