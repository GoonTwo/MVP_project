const mongoose = require('mongoose');
const Schema = mongoose.Schema;

var bookSchema = mongoose.Schema({
  _id: Schema.Types.ObjectId,
  user: [{ type: Schema.Types.ObjectId, ref: 'User' }],
  etag: { type: String, index: { unique: true } },
  title: String,
  Author: String,
  description: String,
  pageCount: Number,
  imageUrl: String,
});

var Book = mongoose.model('Book', bookSchema);

module.exports = Book;