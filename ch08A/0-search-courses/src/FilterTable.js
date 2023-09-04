import React, { Component } from 'react';
import CourseRow from './CourseRow';

export default class FilterTable extends Component {
  render() {
    const tookOnly = this.props.tookOnly;
    const rows = [];
    this.props.courses.forEach((course) => {
      if (tookOnly && !course.took) {
        return;
      }
      rows.push(
        <CourseRow
          course={course}
          key={course.name}
        />
      );
    });
    return (
      <table className="table table-striped table-bordered table-sm p-2 m-2">
        <thead className="bg-info text-white">
          <tr>
            <th>Name</th>
            <th>Desc</th>
            <th>Took</th>
          </tr>
        </thead>
        <tbody>{rows}</tbody>
      </table>
    );
  }
}
export const COURSES = [
  { name: 'CSC115', description: "Python", took: true },
  { name: 'CSC141', description: "Java I", took: true },
  { name: 'CSC142', description: "Java II", took: true },
  { name: 'CSC240', description: "Java III", took: true },
  { name: 'ART110', description: "Art Appreciation", took: false },
  { name: 'ESS335', description: "Ecology", took: false },
  { name: 'LIT300', description: "Liturature", took: true },
  { name: 'ENG368', description: "English", took: false }

];
