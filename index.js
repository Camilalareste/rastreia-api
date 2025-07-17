const express = require('express');
const app = express();
const dotenv = require('dotenv');
dotenv.config();

const sensorRoutes = require('./routes/sensores');
const imagensRoutes = require('./routes/imagens');

app.use(express.json());

app.get('/', (req, res) => {
  res.send('Bem-vinda à API RASTREIA.ORG');
});

app.use('/sensor', sensorRoutes);
app.use('/imagens', imagensRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Servidor rodando na porta ${PORT}`));