const db = require('../index');
const Sequelize = require('sequelize');

const Book = db.sequelize.define('book', {
  etag: { type: Sequelize.STRING, unique: true }, 
  title: { type: Sequelize.STRING },
  author: { type: Sequelize.STRING },
  description: { type: Sequelize.STRING },
  pageCount: { type: Sequelize.INTEGER},
  imageUrl: { type: Sequelize.STRING },
});

module.exports = Book;