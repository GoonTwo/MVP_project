var mongoose = require('mongoose');
mongoose.connect('mongodb://danny:danny@ds259105.mlab.com:59105/bookshelf_hr');

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
  })
};

module.exports.saveUser = saveUser;


