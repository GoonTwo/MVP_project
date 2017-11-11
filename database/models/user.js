const mongoose = require('mongoose');
const Schema = mongoose.Schema;

var userSchema = mongoose.Schema({
  _id: Schema.Types.ObjectId,
  name: { type: String, required: true, index: { unique: true } },
  books: [{ type: Schema.Types.ObjectId, ref: 'Book' }]
});

var User = mongoose.model('User', userSchema);

module.exports = User;