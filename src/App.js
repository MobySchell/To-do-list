import React, { Component } from "react";

import { BrowserRouter, Route } from "react-router-dom";

import "bootstrap/dist/css/bootstrap.css";

import firebase from "./Firebase/firebase";

import Navbar from "./components/Navbar";
import Home from "./login/Home";
import Login from "./login/Login";
import Register from "./login/Register";

export default class App extends Component {
    constructor(props) {
        super(props);

        this.auth = firebase.auth();

        this.state = {
            user: null,
        };
    }

    componentDidMount() {
        firebase.auth().onAuthStateChanged((user) => {
            this.setState({ user: user });
        });
    }

    render() {
        const { user } = this.state;

        return (
            <BrowserRouter>
                <Navbar user={user} />

                <Route path="/" exact component={Home} />
                <Route path="/login" component={Login} />
                <Route path="/register" component={Register} />
            </BrowserRouter>
        );
    }
}
