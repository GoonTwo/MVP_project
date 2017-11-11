import React, { Component } from 'react'
import $ from 'jquery';

class Book extends Component {
  constructor(props) {
    super(props);
  }

  saveBook() {
    $.ajax({
      url: '/users/books',
      method: 'POST',
      data: {
        user: this.props.currentUser,
        book: this.props.book
      },
      success: (data) => {
        console.log('successful post to server')
      }
    })
  }
  
  render() {
    let book = this.props.book;
    return (
        <div className="bookItem">
          <h4>{book.title}</h4>
          <img src={book.imageUrl}/>
          <p>{book.authors}</p>
          <p>page count: {book.pageCount}</p>
          <button className="btn btn-primary" onClick={this.saveBook.bind(this)} >Save</button>
        </div>
    );
  }  
}

export default Book;
