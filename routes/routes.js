const express = require('express');
const general = require('./controllers/generalController');
const app = express();

// … suas outras rotas …

app.get('/api/todas', general.getAll);

// start do servidor
app.listen(3000, () => console.log('🔌 rodando em http://localhost:3000'));
