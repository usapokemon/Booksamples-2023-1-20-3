import './App.css';
import Toggle from './Toggle';
import React, {Component} from 'react';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      flag : true
    }
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState(prev => ({
      flag: !prev.flag
    }));
  }
  render() {
    return (
        <div>
          <Toggle value={this.state.flag} />
          <Toggle value={!this.state.flag} />
          <button 
            onClick={this.handleClick}>Click Me
          </button>
        </div>
    );
  }
  
}


