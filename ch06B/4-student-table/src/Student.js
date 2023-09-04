import React from "react";

export default function Student (props) {
  
    const id = props.id;
    const studentName = props.studentName;
    const totalCredits = props.totalCredits;
   
    return (
        <tr>
          <td className="text-center">{id}</td> 
          <td className="text-center">{studentName}</td>  
          <td className="text-center">{totalCredits}</td>
        </tr>
    );
}
