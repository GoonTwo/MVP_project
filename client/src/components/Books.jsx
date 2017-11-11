import React, { Component } from 'react'

import Book from './Book.jsx';

export default class Books extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    let books = this.props.books.map((book) => {
      return <Book key={book.id} book={book} currentUser={this.props.currentUser}/>
    });
    return (
      <div>
        {books}
      </div>
    )
  }
}
