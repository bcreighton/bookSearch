import React, { Component } from 'react';
import './Header.css';

export default class Header extends Component {
  render() {
    return (
      <section className='header'>
        <div className='container headerContainer'>
          <h1 className='appName'>
            Google Book Search
          </h1>
        </div>
      </section>
    )
  }
}