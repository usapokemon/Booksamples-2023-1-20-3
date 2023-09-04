import React, { Component } from "react";
import BookTableRow from "./BookTableRow";

export default class BookTable extends Component {

  render() {
  
    const books = [
      {id : 1, title: 'True Crime', price: 15.95 },
      {id : 2, title: 'Fake Crime', price: 15.95 },
      {id : 3, title: 'Make Belive', price: 15.95 },
      {id : 4, title: 'No Nonsense', price: 29.99 },
    ]
    

   const rows = [];

    books.forEach((book) => {
      rows.push(
        <BookTableRow
          book={book}
          key={book.id}
        />
      );
    });

    return (
      
      <table className="table table-sm table-striped table-bordered">
        <thead className="bg-info text-white text-center m-2 p-2">
          <tr colSpan="3">
            <th>ID</th><th>Title</th><th>Price</th>
          </tr>
        </thead>
        <tbody colSpan="3">
          {rows}
        </tbody>
      </table>
   
    );
  }
}