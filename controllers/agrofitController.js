const axios = require('axios');

async function getData(req) {
  try {
    const token = process.env.AGROAPI_TOKEN;
    const response = await axios.get(
      'https://api.cnptia.embrapa.br/agrofit/v1/produtos-formulados',
      {
        headers: {
          Authorization: `Bearer ${token}`
        }
      }
    );
    return response.data;
  } catch (error) {
    console.error('Erro Agrofit:', error.message);
    return { erro: 'Falha ao consultar Agrofit' };
  }
}

module.exports = { getData };
// This module fetches data from the Agrofit API using axios.
// It handles errors and returns a structured response.

