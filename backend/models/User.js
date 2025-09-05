// backend/models/User.js

const { DataTypes } = require('sequelize');
const sequelize = require('../config/database'); // Importa a conexão

const User = sequelize.define('User', {
  // Define os campos da tabela 'users'
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true // Garante que não haverá emails duplicados
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false
  }
});

module.exports = User;