const axios = require('axios');

async function getData(req) {
  try {
    const { lat = -8.0476, lon = -34.8770 } = req.query;
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

    const data = response.data;
    return {
      cidade: data.name,
      temperatura: `${data.main.temp}°C`,
      sensacao: `${data.main.feels_like}°C`,
      clima: data.weather[0].description,
      umidade: `${data.main.humidity}%`,
    };
  } catch (err) {
    console.error('Erro no clima:', err.message);
    return { erro: 'Falha ao consultar clima' };
  }
}

module.exports = { getData };
