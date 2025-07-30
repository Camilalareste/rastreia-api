// index.js
const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

// 🔐 Middlewares opcionais de segurança e CORS
// const helmet = require('helmet'); // Segurança extra (npm install helmet)
// const cors = require('cors');     // Libera acesso externo (npm install cors)
// app.use(helmet());
// app.use(cors());

// 🧠 Middlewares para ler JSON e formulários
app.use(express.json());

// Importa os controllers, especificando o caminho correto para a pasta 'controllers'
const environmentController = require('./controllers/environmentController');
const satvegController     = require('./controllers/satvegController');
const agrofitController     = require('./controllers/agrofitController');
const sensorController      = require('./controllers/sensorController');
const csvController         = require('./controllers/csvController');
const generalController     = require('./controllers/generalController'); // Seu generalController

// Rotas individuais (você pode manter ou remover se não forem mais necessárias)
app.use('/environment', environmentController);
app.use('/agrofit',     agrofitController);
app.use('/satveg',      satvegController);
app.use('/sensor',      sensorController);
app.use('/csv',         csvController);

// Rota geral que agrega todas as APIs
app.use('/api', generalController);

// Porta em que o servidor irá rodar
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server rodando na porta ${PORT}`));
