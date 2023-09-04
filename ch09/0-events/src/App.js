import './App.css';
import Toggle from './Toggle';
import React, {Component} from 'react';

export default class App extends Component {
  componentDidMount (prevProps, prevState, snapshot) {
    console.log("+ App - Inside ComponentDidMount");
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    console.log("+ App- Inside ComponentDidUpdate");
  }
  
  componentWillUnmount(prevProps, prevState, snapshot) {
    console.log("+ App - Inside ComponentWillUnmount");
  }
  render() {
    return (
    <div>

      <Toggle />

    </div>
  )}
    
  
}


