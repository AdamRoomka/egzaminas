import React, { useState, useEffect } from 'react'
import TableList from './TableList'
import './table.css'
import { useGlobalUserContext } from "../../../untils/context/UserContext";

function Table() {
    const [render, setRender] = useState(false)

  const { userData } = useGlobalUserContext();

  if (Object.keys(userData).length !== 0) {
    var userBooksData = userData.books.map((book) => {
      return (
            <TableList
                key={book._id}
                title={book.name}
                category={book.category}
                date={book.date}
                defaultData={book}
                bookID={book._id}
            />
      );
    });
  }
  return (
      <table id='table'>
          <tbody>
            <tr>
                <th></th>
                <th>title</th>
                <th>category</th>
                <th>date</th>
                <th></th>
            </tr>
            {userBooksData}
          </tbody>    
      </table>
  )
}

export default Table