import React, { Component } from "react";

export default class BookRow extends Component {
  render() {
    const book = this.props.book;
  
    return ( 
        <tr>
          <td className="text-center">{book.id}</td>  
          <td className="text-center">{book.title}</td>
          <td className="text-center">${Number(book.price).toFixed(1)}</td>
        </tr>
    );
  }
}