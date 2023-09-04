import React from "react";
import TextInput from "./TextInput";
import TextDisplay from "./TextDisplay";



export default class TextMain extends React.Component {
  
  constructor(props) {
    super(props);
    this.state = {
      filterText: '',
    };


    this.handleTextChange = this.handleTextChange.bind(this);
    
  }

  handleTextChange(text) {
    this.setState({
      filterText: text
    });
  }
  componentDidMount (prevProps, prevState, snapshot) {
    console.log("* TextMain - Inside ComponentDidMount");
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    console.log("* TextMain- Inside ComponentDidUpdate");
  }
  
  componentWillUnmount(prevProps, prevState, snapshot) {
    console.log("* TextMain - Inside ComponentDidUnmount");
  }

  render() {
    console.log("Inside main");
    return (
      <div>
        <TextInput
          text={this.state.filterText}
          onFilterTextChange={this.handleTextChange}
        />
        <TextDisplay
          text={this.state.filterText}
          
        />
      </div>
    );
  }
}



