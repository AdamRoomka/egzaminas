import React from 'react'

function TableList({title, category, date, bookID, findBooksAndDelete, onEdit}) {
  let Date = date.substring(0, 10);
  return (
    <>
    <tr  className='text-center'>
        <td>1</td>
        <td>{title}</td>
        <td>{category}</td>
        <td>{Date}</td>
    </tr>
    </>
  )
}

export default TableList