import React, { Component } from 'react';

export default class Details extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userText: '',
      selectValue: ''
    }
  }

  handleChange(e) {
    this.setState({ selectValue: e.target.value }, () => {
      this.props.handleSelect(this.state.selectValue)
    });
  }

  onClick(e) {
    this.setState((state, props) => { return { selectValue: state.userText, userText: '' }})
    this.props.handleAddUser(this.state.userText); 
  }

  render() {
    let options = this.props.users.map((user, i) => {
      return <option key={i} value={user}>{user}</option>
    });

    return (
      <div>
        <input 
          type="text" 
          value={this.state.userText}
          onChange={(e) => this.setState({userText: e.target.value})} 
          placeholder="new user"
        />
        <button 
          type="submit" 
          onClick={this.onClick.bind(this)}
        >
          add user
        </button>


        <select 
          value={this.state.selectValue}
          onChange={this.handleChange.bind(this)}
        >
          {options}
        </select>
        <a href={`/books/${this.props.currentUser}`}><button>See Favorites</button></a>
      </div>
    )
  }
}
