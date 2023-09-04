import React, { Component } from "react";

export default class CourseTookRow extends Component {
  render() {
    const took = this.props.took;
    return (
      <tr>
        <th colSpan="2">
          {took}
        </th>
      </tr>
    );
  }
}