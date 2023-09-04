import React, { Component } from 'react';
import MyDisplay from './MyDisplay';
export default class ControlledForm extends Component {
  constructor(props) {
    super(props);
    this.state = { value: '' };

    this.handleChange = this.handleChange.bind(this);
    //this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({ value: event.target.value });
  }

  render() {
    return (
      <>
      <h3>Use Controlled Form</h3><br/>
      <h6>Enter a course title</h6>
      <form onSubmit={this.handleSubmit}>
        <label>
          Course Title:
          <input type="text"
            value={this.state.value}
            onChange={this.handleChange}
          />

        </label>
        <br />
        <br />

      </form>

        <MyDisplay text={this.state.value} />

      </>

    );
  }
}
