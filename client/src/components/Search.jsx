import React, { Component } from 'react'

export default class Search extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchTerm: ''
    }
  }
  render() {
    return (
      <div>
        <input 
          type="text" 
          placeholder="search"
          value={this.state.searchTerm} 
          onChange={e => this.setState({searchTerm: e.target.value})}
        />
        <button 
          type="submit" 
          onClick={() => {this.props.searchBooks(this.state.searchTerm); this.setState({searchTerm: ''})} }
        >
          search
        </button>
      </div>
    )
  }
}
