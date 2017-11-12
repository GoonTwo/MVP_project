const db = require('../index');
const Sequelize = require('sequelize');

const User = db.sequelize.define('user', {
  name: { type: Sequelize.STRING, unique: true },
});

module.exports = User;