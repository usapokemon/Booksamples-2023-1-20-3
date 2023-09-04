import React, { Component } from "react";



export default class ATableRow extends Component {
   
    render()  {
        let c = this.props.course;
        console.log('--- in ATableRow ---');
        return(
            <tr>
                <td>{c.id}</td>
                <td>{c.description}</td>
                <td>{c.semester}</td>
                <td>{c.prefix}</td>
                <td>{c.number}</td>
                <td>{c.grade}</td>
                <td>
                    <button className="btn btn-sm btn-warning m-1"
                    onClick={() =>this.props.editCallback(c)} >
                    Edit
                    </button>
                    {/*}
                    <button className="btn btn-sm btn-warning m-1"
                    onClick={() =>this.props.deleteCallback(c)} >
                    Delete
                    </button>*/}
                </td>


            </tr>
            
         )
        
    }
}