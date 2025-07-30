const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

// 🔐 Segurança e CORS (descomenta se quiser usar)
// const helmet = require('helmet'); // npm install helmet
// const cors = require('cors');     // npm install cors
// app.use(helmet());
// app.use(cors());

// 🧠 Middleware para ler JSON e formulário
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// 📁 Importação das rotas
const agrofitRouter = require('./routes/agrofit');
const csvRouter = require('./routes/csv');
const environmentRouter = require('./routes/environment');
const satvegRouter = require('./routes/satveg');
const sensorRouter = require('./routes/sensores');
const rastreiaRouter = require('./routes/rastreia');
const generalRouter = require('./routes/general'); // /api/geral?lat=&lon=

// 🚏 Registro das rotas
app.use('/api/agrofit', agrofitRouter);
app.use('/api/csv', csvRouter);
app.use('/api/environment', environmentRouter);
app.use('/api/satveg', satvegRouter);
app.use('/api/sensores', sensorRouter);
app.use('/api/rastreia', rastreiaRouter);
app.use('/api', generalRouter); // 👉 /api/geral

// ✅ Health check (root)
app.get('/', (req, res) => {
  res.send('🚀 API funcionando com sucesso!');
});

// ❌ 404 para rotas não encontradas
app.use((req, res) => {
  res.status(404).json({ error: 'Rota não encontrada' });
});

// 🚀 Inicia o servidor
app.listen(port, () => {
  console.log(`🔥 Servidor rodando em http://localhost:${port}`);
});