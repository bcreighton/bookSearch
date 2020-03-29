import React, { Component } from 'react';
import './Book.css';

export default class Book extends Component {
  generateAuthors(authors) {
    return !authors
      ? 'Unknown'
      : authors.map((author, i) => (
        authors.length === 1
          ? author
          : authors.length === i + 1
            ? author
            : author + ', '
      ))
  }

  generatePrice(price) {
    return !price
      ? 'Unknown'
      : price.amount === 0
        ? 'Free'
        : price.currencyCode === 'USD'
          ? '$' + price.amount
          : 'Unknown'
  }

  render() {
    const book = this.props
    const authors = !book.authors
      ? 'Author:'
      : book.authors.length > 1
        ? 'Authors:'
        : 'Author:'
    const description = !book.description
      ? ''
      : book.description.length > 300
        ? <p className='description'>{book.description.substring(0, 300) + '...'}</p>
        : <p className='description'>{book.description}</p>

    return (
      <a
        href={book.link}
        target='_blank'
        rel='noreferrer noopener'
      >
        <div className='bookContainer'>
          <h1 className='bookTitle'>{book.title}</h1>
          <img
            src={book.image}
            className='bookImg'
            alt={book.title + 'image'}
          />
          <div className='bookDetails'>
            <p className='authors'>{authors} {this.generateAuthors(book.authors)}</p>
            <p className='price'>Price: {this.generatePrice(book.price)}</p>
            {description}
          </div>
        </div>
      </a>
    )
  }
}