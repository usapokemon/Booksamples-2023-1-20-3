import React, { Component } from "react";

export default class InfoBar extends Component {
  
  constructor(props) {
    super(props);
    this.props = {   
        studentName: "",
        transferCredits : 0
    }
    this.handleNameChange = this.handleNameChange.bind(this);
    this.handleCreditChange = this.handleCreditChange.bind(this);
  }
  
  handleNameChange(e) {
    this.props.onNameChange(e.target.value);
  }
  
  handleCreditChange(e) {
    this.props.onCreditChange(e.target.value);
  }


  render() {
    // step 5 comment out the following two lines
    //const filterText = this.props.filterText;
    //const inStockOnly = this.props.inStockOnly;
    const studentName = this.props.name;
    const transferCredits = this.props.credits;
    console.log("--- InfoBar ---");

    return (
      
      <form>
        <form-label>Student Name:    </form-label>
        <input
          type="text"
          placeholder="Enter Name"
          value={studentName}
          onChange={this.handleNameChange}
          />
        <p>
        <label>Total Transfer Credits:</label>
          <input
            type="number"
            placeholder="Enter Number of Transfer Credits"
            value={transferCredits}
            onChange={this.handleCreditChange}
            />
        </p>
        
      </form>
    );
  }
}
