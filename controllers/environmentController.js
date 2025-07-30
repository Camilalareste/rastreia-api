const axios = require('axios');

exports.getClima = async (req, res) => {
  try {
    const { lat, lon } = req.query;
    const apiKey = process.env.WEATHER_API_KEY;

    const response = await axios.get('https://api.openweathermap.org/data/2.5/weather', {
      params: {
        lat,
        lon,
        appid: apiKey,
        units: 'metric',
        lang: 'pt_br'
      }
    });

    res.json(response.data);
  } catch (error) {
    console.error('Erro ao buscar o clima:', error.message);
    res.status(500).json({ erro: 'Erro ao buscar o clima' });
  }
};