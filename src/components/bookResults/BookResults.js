import React, { Component } from "react";
import Book from '../book/Book';
import './BookResults.css';

export default class BookResults extends Component {
  generateBooks(books) {
    const generatedBooks = books.map((book, key) => {
      return (
        <Book
          key={key}
          image={book.image}
          price={book.price}
          link={book.link}
          title={book.title}
          authors={book.authors}
          description={book.description}
        />)
    })
    return generatedBooks
  }

  render() {
    const books = this.props.books

    return (
      <section className='bookResults'>
        <div className='container'>
          {this.generateBooks(books)}
        </div>
      </section>
    )
  }
}