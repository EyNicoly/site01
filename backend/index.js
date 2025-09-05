// cole este código em backend/index.js

const express = require('express');
const cors = require('cors');
require('dotenv').config({ path: './.env' }); // Garante que ele leia o .env da pasta backend

// Importações do Banco de Dados
const sequelize = require('./config/database');
const User = require('./models/User');
const bcrypt = require('bcryptjs');

// Inicia o App Express
const app = express();
const PORT = process.env.PORT || 5000;

// Middlewares
app.use(cors());
app.use(express.json());

// =================== ROTAS DA API VIRÃO AQUI ===================

// Rota de Teste
app.get('/api', (req, res) => {
  res.json({ message: "API do Backend está no ar!" });
});

// Rota de Cadastro (/register)
app.post('/api/auth/register', async (req, res) => {
    // ... (Aqui vamos colar o código da rota de cadastro)
});

// Rota de Login (/login)
app.post('/api/auth/login', async (req, res) => {
    // ... (Aqui vamos colar o código da rota de login)
});


// ===============================================================


// Sincroniza com o banco de dados e inicia o servidor
sequelize.sync().then(() => {
  console.log('Banco de dados conectado e sincronizado.');
  app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
  });
}).catch(err => {
  console.error('Erro ao conectar com o banco de dados:', err);
});