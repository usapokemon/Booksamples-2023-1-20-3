import React, { Component } from "react";
import Student from "./Student";

export default class StudentTable extends Component {
  
  
  render() {
    let min = this.props.min;  //the minimum credits
    let max = this.props.max;  //the maximum credits 
    
    const students = [
      {id : 1, studentName: 'Mary', totalCredits: 50 },
      {id : 2, studentName: 'John', totalCredits: 33 },
      {id : 3, studentName: 'Steve', totalCredits: 90 },
      {id : 4, studentName: 'Chuck', totalCredits: 100 },
    ]
    
   const rows = [];
   
    students.forEach((student) => {
      if (student.totalCredits >= min && student.totalCredits <= max)  
        rows.push(
          <Student
            id={student.id}
            studentName={student.studentName} // try the incorrect: 'name'; 
            totalCredits={student.totalCredits}
          />
      );
    }) ;

    return (
      <table className="table table-sm table-striped table-bordered">
        <thead className="bg-info text-white text-center m-2 p-2">
          <tr colSpan="3">
            <th>ID</th><th>Name</th><th>Total Credits</th>
          </tr>
        </thead>
        <tbody colSpan="3">
          {rows}
        </tbody>
      </table>
   
    );
  }
}