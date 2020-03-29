import React, { Component } from 'react';
import SearchBar from '../searchBar/SearchBar';
import Filters from '../filters/Filters';
import './SearchHeader.css';

export default class SearchHeader extends Component {
  render() {
    return (
      <section className='searchHeader'>
        <SearchBar
          submitSearch={e => this.props.submitSearch(e)}
          updateSearch={userInput => this.props.updateSearch(userInput)}
        />
        <Filters
          updateBookType={bookType => this.props.updateBookType(bookType)}
          updatePrintType={printType => this.props.updatePrintType(printType)}
        />
      </section>
    )
  }
}