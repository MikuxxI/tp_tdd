const Sequelize = require('sequelize');
const config = require('./config.js');
const path = require('path');

// Crée une nouvelle instance de Sequelize avec la configuration appropriée
const sequelize = new Sequelize(
  config.test.database,
  config.test.username,
  config.test.password,
  {
    host: config.test.host,
    dialect: config.test.dialect,
    models: [path.resolve(__dirname, 'models')]
  }
);

// Vérifie la connexion à la base de données
sequelize
  .authenticate()
  .catch((error) => {
    console.error('Impossible de se connecter à la base de données:', error);
  });

// Synchronise les modèles avec la base de données
sequelize.sync({ force: false })
  .catch((error) => {
    console.error('Erreur lors de la synchronisation des modèles avec la base de données:', error);
  });

module.exports = sequelize;