import React, { Component } from "react";
import BookTableRow from "./BookTableRow";
import 'bootstrap/dist/css/bootstrap.min.css';  
import {Table } from 'react-bootstrap'; 

export default class BookTable extends Component {

  render() {
    const books = [
      {id : 1, title: 'True Crime', price: 15.95 },
      {id : 2, title: 'Fake Crime', price: 15.95 },
      {id : 3, title: 'Make Belive', price: 15.95 },
      {id : 4, title: 'No Nonsense', price: 15.95 },
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
      <div className="p-4">
      <Table  striped bordered hover>
        <thead className="bg-info text-white text-center m-2 p-2">
          <tr colSpan="3">
            <th>ID</th><th>Title</th><th>Price</th>
          </tr>
        </thead>
        <tbody colSpan="3">
          {rows}
        </tbody>
      </Table>
      </div>
    );
  }
}