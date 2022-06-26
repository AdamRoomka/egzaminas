import React from 'react'

function TableList() {
  return (
    <>
    <tr  className='text-center'>
        <td>1</td>
        <td>firstchild</td>
        <td>secondchild</td>
        <td>thirdchild</td>
        <td className='d-flex'>
          <button className='buttonedit'>Edit</button>
          <button className='buttondelete'>Delete</button>
        </td>
    </tr>
    </>
  )
}

export default TableList