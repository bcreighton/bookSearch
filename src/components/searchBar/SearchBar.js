import React, { Component } from 'react';
import './SearchBar.css';

export default class SearchBar extends Component {
  render() {
    return (
      <div className='container searchBar'>
        <form
          className="bookSearch"
          onSubmit={e => this.props.submitSearch(e)}
        >
          <label htmlFor="search">Search:</label>
          <input
            type="text"
            name="search"
            id="search"
            placeholder="Book"
            onChange={e => this.props.updateSearch(e.target.value)}
          />
          <button type="submit">Search</button>
        </form>
      </div>
    )
  }
}