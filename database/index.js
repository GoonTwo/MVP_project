var mongoose = require('mongoose');
mongoose.connect('mongodb://danny:danny@ds259105.mlab.com:59105/bookshelf_hr');
mongoose.Promise = require('bluebird');


var db = mongoose.connection;

db.on('error', console.error.bind(console, 'connection error:'));

db.once('open', () => {
  console.log('connected to MongoDB')
});

// MODELS
const User = require('./models/user');
const Book = require('./models/book');

// Helper Functions
const saveUser = (username) => {
  let newUser = new User({
      _id: mongoose.Types.ObjectId(),
      name: username,
  }); 
  return newUser.save()
};

const saveBook = (username, book) => {

  User.find({name: username }).exec()
  .then((user) => {
      let newBook = new Book({
        _id: mongoose.Types.ObjectId(),
        user: user._id,
        etag: book.id,
        title: book.title,
        Author: booke.author,
        description: book.description,
        pageCount: book.pageCount,
        imageUrl: book.imageUrl,
      })
     user.books.push(newBook)
     return user.save();
   })
   .catch(() => {

   })
};

module.exports.saveUser = saveUser;
module.exports.saveBook = saveBook;


