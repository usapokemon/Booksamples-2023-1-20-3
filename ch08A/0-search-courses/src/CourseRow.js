import React, { Component } from "react";

export default class CourseRow extends Component {
  render() {
    const course = this.props.course;
    const name = course.took ?
      course.name :
      <span style={{color: 'red'}}>
        {course.name}
      </span>;
    const flag = course.took? "Took" : "Not Yet"

    return (
      <tr>
        <td>{name}</td>
        <td>{course.description}</td>
        <td>{flag}</td>
      </tr>
    );
  }
}