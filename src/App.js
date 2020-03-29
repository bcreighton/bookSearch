import React, { Component } from 'react';
import Header from './components/header/Header';
import SearchHeader from './components/searchHeader/SearchHeader';
import BookResults from './components/bookResults/BookResults';
import './App.css';

export default class App extends Component {
  state = {
    books: [],
    userInput: '',
    printType: 'all',
    bookType: 'noFilter',
  }

  submitSearch(e) {
    e.preventDefault()
    const { userInput, printType, bookType } = this.state
    const baseUrl = 'https://www.googleapis.com/books/v1/volumes?'
    const key = 'AIzaSyBjOrTqpLOQbBf-nGqEyl9FqkHHlFNzngQ'
    const searchUrl = bookType === 'noFilter'
      ? `${baseUrl}q=${userInput.split(' ').join('+')}&printType=${printType}&orderBy=newest&langRestrict=en&key=${key}`
      : `${baseUrl}q=${userInput.split(' ').join('+')}&printType=${printType}&filter=${bookType}&orderBy=newest&langRestrict=en&key=${key}`

    fetch(searchUrl)
      .then(bookRes => {
        if (!bookRes.ok) {
          throw new Error('Something went wrong, please try again')
        }
        return bookRes.json()
      })
      .then(books => {
        return (
          this.setState({
            books: this.getBookData(books),
            error: null
          })
        )
      })
      .catch(err => {
        this.setState({
          error: err.message
        })
      })
  }

  getBookData(data) {
    return data.items.map(book => {
      const {
        imageLinks, title, authors, description } = book.volumeInfo
      const { retailPrice, buyLink } = book.saleInfo

      return {
        image: imageLinks !== undefined ? imageLinks.thumbnail : '',
        price: retailPrice !== undefined ? retailPrice : '',
        link: buyLink !== undefined ? buyLink : '',
        title: title !== undefined ? title : '',
        authors,
        description,
      }
    })
  }

  updateSearch(userInput) {
    this.setState({
      userInput
    })
  }

  updateBookType(bookType) {
    this.setState({
      bookType
    })
  }

  updatePrintType(printType) {
    this.setState({
      printType
    })
  }

  render() {
    return (
      <div className="App">
        <Header />
        <SearchHeader
          submitSearch={e => this.submitSearch(e)}
          updateSearch={userInput => this.updateSearch(userInput)}
          updateBookType={bookType => this.updateBookType(bookType)}
          updatePrintType={printType => this.updatePrintType(printType)}
        />
        <BookResults books={this.state.books} />
      </div>
    );
  }
}
