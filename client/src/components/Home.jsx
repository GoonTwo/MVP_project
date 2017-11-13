import React, { Component } from 'react'
import $ from 'jquery';

import Search from './Search.jsx';
import Books from './Books.jsx';
import Details from './Details.jsx';

class Home extends Component {
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
    this.setUsers();
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

  setUsers() {
    $.ajax({
      url: '/users',
    }).done(users => {
      var users = users.map(user => user.name)
      this.setState({ users: users, currentUser: users[0] });
    })
  }

  handleAddUser(newUser) {
    if (this.state.users.indexOf(newUser) >= 0) return;
    this.setState((prevState) => {
      return {users: prevState.users.concat([newUser]), currentUser: newUser}
    }, () => {
      console.log('user: ', this.state.currentUser);
      $.ajax({
        url: '/users',
        method: 'POST',
        data: {
          user: this.state.currentUser
        },
        success: (data) => {
          console.log('successful post to server')
        }
      })
    });

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
          curentUser={this.state.currentUser} 
          handleAddUser={this.handleAddUser.bind(this)}
          handleSelect={this.handleSelect.bind(this)}
          currentUser={this.state.currentUser}
        />
        <Books books={this.state.books} currentUser={this.state.currentUser}/>
      </div>
    );
  }
}

export default Home;