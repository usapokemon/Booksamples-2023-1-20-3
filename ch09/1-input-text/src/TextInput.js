import React, {Component} from 'react';


export default class TextInput extends Component {
  constructor(props){
    super(props);
    this.handleFilterTextChange = this.handleFilterTextChange.bind(this);
  }

  handleFilterTextChange(e) {
    this.props.onFilterTextChange(e.target.value)
  }
  componentDidMount (prevProps, prevState, snapshot) {
    console.log("** TextInput - Inside ComponentDidMount")
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    console.log("** TextInput - Inside ComponentDidUpdate")
  }
  
  componentWillUnmount(prevProps, prevState, snapshot) {
    console.log("** TextInput - Inside ComponentWillUnmount")
  }
  render() {
    console.log("Inside TextInput");
    return (
      <form>
        <input
          type="text"
          placeholder="Enter text..."
          value={this.props.text}
          onChange={this.handleFilterTextChange}
          />
      </form>
    );
  }
  }
  