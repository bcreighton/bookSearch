import React, { Component } from "react";
import './Filters.css';

export default class Filters extends Component {
  render() {
    return (
      <div className='container filters'>
        <div className='filterOption'>
          <label htmlFor='printType'>Print Type:</label>
          <select
            id='printType'
            name='printType'
          >
            <option value='all'>All</option>
            <option value='books'>Books</option>
            <option value='magazines'>Magazines</option>
          </select>
        </div>
        <div className='filterOption'>
          <label htmlFor='bookType'>Book Type:</label>
          <select
            id='bookType'
            name='bookType'
          >
            <option value='noFilter'>No Filter</option>
            <option value='patial'>Partial</option>
            <option value='full'>Full</option>
            <option value='freeEBooks'>Free eBooks</option>
            <option value='paidEBooks'>Paid eBooks</option>
            <option value='ebooks'>eBooks</option>
          </select>
        </div>
      </div>
    )
  }
}