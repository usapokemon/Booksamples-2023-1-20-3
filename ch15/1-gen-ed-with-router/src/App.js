//import logo from './logo.svg';
import './App.css';
import React, { Component } from "react";
import GenEdTables from "./GenEdTables";
//import ATableRow from './ATableRow';
import {
    BrowserRouter
  } from "react-router-dom";

export default class App extends Component {
    render() {
        return  (
            <BrowserRouter>
                <GenEdTables />
            </BrowserRouter>
        )      
    }
  

}