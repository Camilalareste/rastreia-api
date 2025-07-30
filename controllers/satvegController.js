const axios = require('axios');

exports.getSatvegData = async (req, res) => {
  try {
    // Exemplo de chamada GET básica (ajuste o endpoint conforme necessidade)
    const response = await axios.get('https://api.cnptia.embrapa.br/satveg/v2');
    res.json(response.data);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Erro ao obter dados do SATVeg' });
  }
};