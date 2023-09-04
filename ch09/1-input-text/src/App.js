import './App.css';
import React, {Component} from 'react';
import TextMain from './TextMain';


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
        <TextMain />
      </div>
    );
  }
  
}


