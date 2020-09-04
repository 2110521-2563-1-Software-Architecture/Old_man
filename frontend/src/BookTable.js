import React, { Component } from 'react'
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';

class BookTable extends Component {
   constructor(props) {
      super(props) //since we are extending class Table so we have to use super in order to override Component class constructor
      this.state = { //state is by default an object
         books: [
            { id: 1, bookname: 'Algorithm', authorname: 'Somchai' },
            { id: 2, bookname: 'OS', authorname: 'Tong' },
            { id: 3, bookname: 'Angie', authorname: 'Obe' },
            { id: 4, bookname: 'KU', authorname: 'Y' }
         ]
      }
   }

   renderTableData() {
    return this.state.books.map((book, index) => {
       const { id, bookname, authorname } = book //destructuring
       return (
          <tr key={id}>
             <td>{id}</td>
             <td>{bookname}</td>
             <td>{authorname}</td>
             <Button>Delete</Button>
          </tr>
       )
    })
   }

   renderTableHeader() {
    let header = Object.keys(this.state.books[0])
    return header.map((key, index) => {
       return <th key={index}>{key.toUpperCase()}</th>
    })
   }

   render() {
      return (
         <div>
            <p>Search Results</p>
            <Table id='books' striped bordered hover>
               <tbody>
                  <tr>{this.renderTableHeader()}</tr>
                  {this.renderTableData()}
               </tbody>
            </Table>
         </div>
      )
   }
}

export default BookTable