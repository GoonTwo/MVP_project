const rp = require('request-promise');

const getBooks = (query) => {
  var options = {
    uri: 'https://www.googleapis.com/books/v1/volumes',
    qs: {
      q: query,
      key: 'AIzaSyD_eU-zeKpBAAtBZqKRYIAvYyV8ptKDaYM'
    },
    headers: {
      'User-Agent': 'Request-Promise'
    },
    json: true
  };
  console.log('QUERY:', query)
  return rp(options)
   
}

const formatData = (books) => {
  var books = books.items;

  return books.map((book) => {
    return {
      id: book.id,
      etag: book.etag,
      title: book.volumeInfo.title,
      authors: book.volumeInfo.authors,
      description: book.volumeInfo.description,
      pageCount: book.volumeInfo.pageCount,
      imageUrl: book.volumeInfo.imageLinks.smallThumbnail
    };
  });
}

  module.exports.getBooks = getBooks;
  module.exports.formatData = formatData;