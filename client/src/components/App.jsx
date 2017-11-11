import React, { Component } from 'react'
import $ from 'jquery';

import Search from './Search.jsx';
import Books from './Books.jsx';
import Details from './Details.jsx';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      books: [],
      users: [],
      currentUser: ''
    }
  }

  componentDidMount() {
    this.searchBooks();
  }
  
  searchBooks(query) {
    query = query ? query : 'javascript';
    $.ajax({
      url: '/books',
      data: {
        q: query
      },
    }).done(data => {
      this.setState({ books: data });
    })
  }

  handleAddUser(newUser) {
    this.setState((prevState) => {
      return {users: prevState.users.concat([newUser])}
    })

    // send post request to /users
  }

  handleSelect(user) {
    this.setState({currentUser: user});
  }

  render() {
    return (
      <div>
        <Search searchBooks={this.searchBooks.bind(this)}/>
        <Details 
          users={this.state.users} 
          handleAddUser={this.handleAddUser.bind(this)}
          handleSelect={this.handleSelect.bind(this)}
        />
        <Books books={this.state.books} currentUser={this.state.currentUser}/>
      </div>
    );
  }
}

export default App;