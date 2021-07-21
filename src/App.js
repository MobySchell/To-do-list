import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.css"

import { BrowserRouter, Route } from "react-router-dom";

import Home from "./login/Home";
import Login from "./login/Login";
import Register from "./login/Register";


export default class App extends Component {
    render() {
        return (
            <BrowserRouter>
                

                <Route path="/" exact component={Home}/>
                <Route path="/" component={Login}/>
                <Route path="/" component={Register}/>
            </BrowserRouter>
        )
    }
}
