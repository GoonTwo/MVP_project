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

const saveBook = (info) => {
  if (!info.user) throw book;
  return Book.findOne({etag: info.book.etag }).exec()
  .then((book) => {
    // if book exists, get book _id and add to user
    book._id
    // if book doesn't exist, make new book in db and save
  })
  .then((user) => {
      let newBook = new Book({
        _id: mongoose.Types.ObjectId(),
        user: user._id,
        etag: info.book.etag,
        title: info.book.title,
        Author: info.book.authors.join(' '),
        pageCount: info.book.pageCount,
        imageUrl: info.book.imageUrl,
        description: info.book.description
      })
     return newBook.save();
   })
};

module.exports.saveUser = saveUser;
module.exports.saveBook = saveBook;


