import React, { Component } from 'react';
import Header from './components/header/Header';
import SearchHeader from './components/searchHeader/SearchHeader';
import BookResults from './components/bookResults/BookResults';
import './App.css';

export default class App extends Component {
  state = {
    books: [],
    printType: 'all',
    bookType: null
  }

  componentDidMount() {
    const baseUrl = 'https://www.googleapis.com/books/v1/volumes?'
    const key = 'AIzaSyBjOrTqpLOQbBf-nGqEyl9FqkHHlFNzngQ'
    const query = 'henry'
    const printType = 'all'
    const filter = 'full'
    const searchUrl = `${baseUrl}q=${query}&printType=${printType}&filter=${filter}&key=${key}`

    fetch(searchUrl)
      .then(bookRes => {
        if (!bookRes.ok) {
          throw new Error('Something went wrong, please try again')
        }
        return bookRes.json()
      })
      .then(books => {
        this.setState({
          books: this.getBookData(books),
          error: null
        })
      })
      .catch(err => {
        this.setState({
          error: err.message
        })
      })
  }

  getBookData(data) {
    return data.items.map(book => {
      const { imageLinks, title, authors } = book.volumeInfo
      const { saleability, buyLink } = book.saleInfo

      return {
        image: imageLinks.thumbnail,
        price: saleability,
        link: buyLink,
        title,
        authors,
      }
    })
  }

  render() {
    return (
      <div className="App">
        <Header />
        <SearchHeader />
        <BookResults books={this.state.books} />
      </div>
    );
  }
}
