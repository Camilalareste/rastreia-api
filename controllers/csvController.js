// controllers/csvController.js
const fs = require('fs');
const path = require('path');
const csv = require('csv-parser');

async function getData() {
  return new Promise((resolve, reject) => {
    const results = [];
    const filePath = path.join(__dirname, '../data/dadosinmet.csv');

    fs.createReadStream(filePath)
      .pipe(csv({ separator: ';' }))
      .on('data', (data) => results.push(data))
      .on('end', () => {
        const filtrado = results.filter((item) => {
          const uf = item.UF?.toUpperCase() || '';
          const regiao = item.REGIAO?.toLowerCase() || '';
          return uf === 'PE' && regiao.includes('sertão');
        });
        resolve(filtrado);
      })
      .on('error', (err) => {
        console.error('Erro ao ler CSV:', err);
        reject(err);
      });
  });
}

// Aqui é o handler HTTP que o router espera
async function getDadosInmet(req, res) {
  try {
    const dados = await getData();
    res.json(dados);
  } catch (error) {
    res.status(500).json({ erro: 'Erro ao processar os dados do CSV' });
  }
}

module.exports = { getDadosInmet };
