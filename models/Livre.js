const Sequelize = require('sequelize');
const sequelize = require('../config/tddDB.js');

const Livre = sequelize.define('livre', {
  titre: {
    type: Sequelize.STRING,
    allowNull: false
  },
  auteur: {
    type: Sequelize.STRING,
    allowNull: false
  },
  annee_publication: {
    type: Sequelize.INTEGER,
    allowNull: false
  }
});

module.exports = Livre;