import React, { Component } from "react";

import { BrowserRouter, Route } from "react-router-dom";

import "bootstrap/dist/css/bootstrap.css";

import Navbar from "./components/Navbar";
import Home from "./login/Home";
import Login from "./login/Login";
import Register from "./login/Register";

export default class App extends Component {
    render() {
        return (
            <BrowserRouter>
                <Navbar />

                <Route path="/" exact component={Home} />
                <Route path="/" component={Login} />
                <Route path="/" component={Register} />
            </BrowserRouter>
        );
    }
}
