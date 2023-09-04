import React, {Component} from 'react';

export default class Toggle extends Component {
  constructor(props) {
    super(props);
    this.state = {isToggleOn: true};

    // This binding is necessary to make `this` work in the callback
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState(prevState => ({
      isToggleOn: !prevState.isToggleOn
    }));
  }
  componentDidMount (prevProps, prevState, snapshot) {
    console.log("+ Toggle - Inside ComponentDidMount");
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    console.log("+ Toggle - Inside ComponentDidUpdate");
  }
  
  componentWillUnmount(prevProps, prevState, snapshot) {
    console.log("+ Toggle - Inside ComponentWillUnmount");
  }
  render() {
    return (
      <button onClick={ this.handleClick }>
        {this.state.isToggleOn ? 'ON' : 'OFF'}
      </button>
    );
  }
}
