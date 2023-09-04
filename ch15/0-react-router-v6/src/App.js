import './App.css';
import React, { Component } from "react";

import {
    BrowserRouter
  } from "react-router-dom";

export default class App extends Component {
    render() {
        return  (
            <BrowserRouter>
                <ReactRouter />
            </BrowserRouter>
        )      
    }
}