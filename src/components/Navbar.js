import React, { Component } from "react";
import { Link } from "react-router-dom";
import firebase from "../Firebase/firebase";

export default class Navbar extends Component {
    logOut() {
        firebase.auth().signOut();
    }

    render() {
        const { user } = this.props;

        return (
            <div>
                <nav className="navbar navbar-expand-lg navbar-light bg-light">
                    <div className="container-fluid">
                        <Link className="navbar-brand" to="/">
                            Books
                        </Link>
                        <button
                            className="navbar-toggler"
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#navbarSupportedContent"
                            aria-controls="navbarSupportedContent"
                            aria-expanded="false"
                            aria-label="Toggle navigation"
                        >
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div
                            className="collapse navbar-collapse"
                            id="navbarSupportedContent"
                        >
                            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                                <li className="nav-item">
                                    <Link
                                        className="nav-link active"
                                        aria-current="page"
                                        to="/"
                                    >
                                        Home
                                    </Link>
                                </li>

                                {user ? (
                                    <li className="nav-item">
                                        <button
                                            className="nav-link active"
                                            onClick={this.logOut()}
                                        >
                                            Logout
                                        </button>
                                    </li>
                                ) : (
                                    <div className="d-block">
                                        <li className="nav-item">
                                            <Link
                                                className="nav-link active"
                                                aria-current="page"
                                                to="/login"
                                            >
                                                Login
                                            </Link>
                                        </li>
                                        <li className="nav-item">
                                            <Link
                                                className="nav-link active"
                                                aria-current="page"
                                                to="/register"
                                            >
                                                Register
                                            </Link>
                                        </li>
                                    </div>
                                )}
                            </ul>
                        </div>
                    </div>
                </nav>
            </div>
        );
    }
}
