import React, { Component } from "react";
import CourseTookRow from "./CourseTookRow";
import CourseRow from "./CourseRow";


export default class CourseTable extends Component {
  render() {
    const filterText = this.props.filterText;
    const tookOnly = this.props.tookOnly;

    const rows = [];
    let lastTook = null;
    let index = 0;
    

    this.props.courses.forEach((course) => {
      
      if (course.name.indexOf(filterText) === -1) {
        return;
      }
      
      if (tookOnly && !course.took) {
        return;
      }

      if (course.took !== lastTook) {
        index = index+1; // maintain the uniqueness of a key
        rows.push(
          <CourseTookRow
            took={course.took}
            key={index} 
          />
        );
      }
      index=index+1; // main the uniqueness of the key
      rows.push(
        <CourseRow
          course={course}
          key={index}
        />
      );
      lastTook = course.took;
    });

    return (
      <div className="position-absolute bottom-50 end-50">
      <table className="bg-light m-4 striped bordered hover">
        <thead>
          <tr>
            <th>Name</th>
            <th>Description</th>
            <th>Took</th>
          </tr>
        </thead>
        <tboda>{rows}</tbody>
      </table>
      </div>
    );
  }
}