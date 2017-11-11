const Sequelize = require('sequelize');
const sequelize = new Sequelize('bookshelf', 'root', '1488115-d', {
  dialect: 'mysql'
});

sequelize
  .authenticate()
  .then(() => {
    console.log('Connection has been established successfully.');
  })
  .catch(err => {
    console.error('Unable to connect to the database:', err);
  });

// MODELS
const User = require('./models/user');
const Book = require('./models/book');

User.belongsToMany(Book, { through: 'BookUser' });
Book.belongsToMany(User, { through: 'BookUser' });

sequelize.sync();

// CREATE SAMPLE DATA
Book.create({ etag: '3grsd', 
title: 'harry potter', 
author: 'J.K. Rowling', 
description: 'some desciption about stuff',
pageCount: 566,
imageUrl: 'https://www.someurl.com'
 }).then(book => {
  // you can now access the newly created task via the variable task
  console.log('BOOK :', book)
})

User.create({ name: 'Danny Welstad'}).then(user => {
  // you can now access the newly created task via the variable task
  console.log('USER :', user)
})

// Helper Functions
const saveUser = (username) => {

};

const saveBook = (info) => {

};

module.exports.saveUser = saveUser;
module.exports.saveBook = saveBook;
module.exports.sequelize = sequelize;


