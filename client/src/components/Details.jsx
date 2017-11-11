import React, { Component } from 'react'

export default class Details extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userText: '',
      selected: ''
    }
  }

  onSelect(e) {
    this.setState({ selected: e.target.value }, () => {
      this.props.handleSelect(this.state.selected);
    }); 
  }

  onClick(e) {
    this.setState((state, props) => { return { selected: state.userText }}, () => {
      this.props.handleSelect(this.state.selected);
    })
    this.setState({ userText: '' });
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
          value={this.state.selected}
          onChange={this.onSelect.bind(this)}
        >
          {options}
        </select>
      </div>
    )
  }
}
