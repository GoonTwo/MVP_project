const Sequelize = require('sequelize');
const sequelize = new Sequelize('bookshelf', 'root', '1488115-d', {
  dialect: 'mysql'
});
module.exports.sequelize = sequelize;

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

sequelize.sync({force: true});

// Helper Functions
const saveUser = (username) => {
  return User.create({ name: username })
};

const saveBook = (info) => {
  var description = info.book.description.substring(0, 100);
  return Book.create({
    etag: info.book.etag,
    title: info.book.title,
    author: info.book.authors[0],
    pageCount: info.book.pageCount,
    imageUrl: info.book.imageUrl,
    description: description
  })
    .then(book => {
      return User.findOne({where: {name: info.user}})
      .then((user) => {
        console.log('FOUND USER: ', user)
        return user.addBook(book);
      })
    })
    .catch((err) => {
      console.log('HIT THE CATCH', err)
      return Book.findOne({where: {etag: info.book.etag}})
      .then((book) => {
        return User.findOne({where: {name: info.user }})
        .then((user) => {
          return user.addBook(book)
        })
      })
      console.log('there was a creation error', err)
    })
};

module.exports.saveUser = saveUser;
module.exports.saveBook = saveBook;


