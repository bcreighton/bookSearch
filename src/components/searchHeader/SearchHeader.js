import React, { Component } from 'react';
import SearchBar from '../searchBar/SearchBar';
import Filters from '../filters/Filters';
import './SearchHeader.css';

export default class SearchHeader extends Component {
  render() {
    return (
      <section className='searchHeader'>
        <SearchBar />
        <Filters />
      </section>
    )
  }
}