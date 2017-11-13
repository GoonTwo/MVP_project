import React, { Component } from 'react'
import Books from './Books.jsx';
import $ from 'jquery';

export default class UsersPage extends Component {
  constructor(props) {
    super(props);
    this.user = this.props.match.params.user;
    this.state = {
      books: []
    }
  }
  componentDidMount() {
    this.getUserBooks()
  }
  
  getUserBooks() {
    $.ajax({
      url: '/books/user',
      data: {
        user: this.user
      },
      success: (books) => {
        this.setState({books: books})
      }
    })
  }
  render() {
    return (
      <div>
        <Books books={this.state.books} />
      </div>
    )
  }
}
