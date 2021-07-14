import "bootstrap/dist/css/bootstrap.css";
import React, { Component } from "react";

import BookInput from "./components/BookInput";
import BookTable from "./components/BookTable";

export default class App extends Component {
    constructor(props) {
        super(props);

        this.state = {
            books: [],
        };
    }

    onBookSubmitted(book) {
        this.state.books.push(book);
        this.setState({
            books: this.state.books,
        });
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
                        <BookTable books={this.state.books} />
                    </div>
                </div>
            </>
        );
    }
}
