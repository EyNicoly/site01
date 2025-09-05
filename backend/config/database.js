// backend/config/database.js

const { Sequelize } = require('sequelize');
require('dotenv').config(); // Carrega as variáveis de ambiente

const sequelize = new Sequelize(
  process.env.DB_NAME,      // Nome do banco de dados
  process.env.DB_USER,      // Usuário do banco
  process.env.DB_PASSWORD,  // Senha do banco
  {
    host: process.env.DB_HOST, // Onde o banco está rodando
    dialect: 'mysql'           // O tipo de banco que estamos usando
  }
);

module.exports = sequelize;