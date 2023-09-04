import './App.css';
import Toggle from './Toggle';
import React, {Component} from 'react';

export default class App extends Component {
  
  render() {
    return (
        <div>
          <Toggle value= {true} /> 
          <Toggle value= {false} /> 
        </div>
    );
  }
  
}


