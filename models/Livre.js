const Sequelize = require('sequelize');
const sequelize = require('../config/tddDB.js');

const Livre = sequelize.define('livre', {
  isbn: {
    type: Sequelize.STRING,
    allowNull: false
  },
  titre: {
    type: Sequelize.STRING,
    allowNull: false
  },
  auteur: {
    type: Sequelize.STRING,
    allowNull: false
  },
  editeur: {
    type: Sequelize.STRING,
    allowNull: false
  },
  format: {
    type: Sequelize.ENUM,
    values: [Format.BROCHE, Format.GRANDFORMAT, Format.POCHE]
  }
});

module.exports = Livre;