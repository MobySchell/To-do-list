import "bootstrap/dist/css/bootstrap.css";
import React, { Component } from "react";

import BookInput from "./components/BookInput";
import BookTable from "./components/BookTable";

export default class App extends Component {
    constructor(props) {
        super(props);

        const booksString = localStorage.getItem("books");

        const books = JSON.parse(booksString ? booksString : "[]")

        this.state = {books: books};
    }

    updateBooks(books) {
        this.setState({books: books})
        localStorage.setItem('books', JSON.stringify(books))
    }

    onBookSubmitted(book) {
        this.state.books.push(book);
        this.updateBooks(this.state.books);
    }

    onBookRemoved(bookId) {
        const updatedBookArr = this.state.books.filter((book) => book.id !== bookId)
        this.updateBooks(updatedBookArr)
    }

    render() {
        return (
            <>
                <div className="container">
                    <div className="container">
                        <h1 className="m-3 fs-1">Add Book:</h1>
                        <BookInput
                            createBook={(book) => this.onBookSubmitted(book)}
                        />
                        <BookTable books={this.state.books} 
                        bookRemoved={(bookId) => this.onBookRemoved(bookId)} />
                    </div>
                </div>
            </>
        );
    }
}
