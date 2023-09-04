import React, { Component } from "react";

import ATableRow from "./ATableRow";

export  class ATable extends Component {
    
    render () {
        console.log('--- in Atable ---');
        return (<table className="table table-sm table-striped table-bordered">
                 <thead>
                     <tr>
                         <th colSpan="7"
                            className="bg-primary text-white text-center h4 p-2">
                                {this.props.name}
                         </th>
                     </tr>
                     <tr>
                     <th>Id</th><th>Description</th><th>Semester</th><th>Prefix</th>
                     <th>Number</th><th>Grade</th>
                     </tr>

                 </thead>
                 <tbody>{
                    this.props.courses.map( (c)=>
                        <ATableRow course={ c }
                        key={ c.id }
                        editCallback= { this.props.editCallback }
                        deleteCallback= {this.props.deleteCallback } 
                        /> )

                 }</tbody>
                
        </table>)
            
     
    }
}