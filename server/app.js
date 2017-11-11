const express = require('express');
const app = express();
const path = require('path');
const bodyParser = require('body-parser');
const helpers = require('../helpers/helpers')
const morgan = require('morgan')
const publicPath = path.join(__dirname + '/../client/dist');
const db = require('../database/index')

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static(publicPath));
app.use('/static', express.static(publicPath));
app.use(morgan('tiny'));

app.get('/books', function(req, res) {
  let query = req.query.q;

  helpers.getBooks(query)
    .then(function (books) {
      books = helpers.formatData(books)
      res.json(books)
    })
    .catch(function (err) {
      console.log('API call failed');
      throw err;
    });
})

app.post('/users', function(req, res) {
  var username = req.body.user;
  db.saveUser(username)
    .then((data) => {
      res.json(data);
    })
    .catch((err) => {
      console.log('there was an erroe on saving')
    })
});

app.post('/users/books', function (req, res) {
  db.saveBook(req.body)
    .then((data) => {
      console.log('saved book data to a user', data)
      //res.json(data);
    })
    .catch((err) => {
      console.log('there was an error on saving', err)
    })
});

module.exports = app;