// controllers/agrofitController.js
const axios = require('axios');

exports.getProdutosFormulados = async (req, res) => {
  try {
    const token = process.env.AGROAPI_TOKEN; // Certifique-se de ter essa variável no .env
    const response = await axios.get(
      'https://api.cnptia.embrapa.br/agrofit/v1/produtos-formulados',
      { headers: { Authorization: `Bearer ${token}` } }
    );
    res.json(response.data);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Erro ao obter produtos formulados do Agrofit' });
  }
};