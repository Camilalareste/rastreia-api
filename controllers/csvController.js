const fs = require('fs');
const path = require('path');
const csv = require('csv-parser');

exports.getDadosInmet = (req, res) => {
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

      res.json(filtrado);
    })
    .on('error', (err) => {
      console.error('Erro ao ler CSV:', err);
      res.status(500).json({ error: 'Erro ao ler CSV' });
    });
};
