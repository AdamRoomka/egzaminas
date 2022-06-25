import React from 'react'

function TableEdit() {
  return (
    <>
    <tr>
        <td>1</td>
        <td> <input className='editchild' type="text" defaultValue="firstchild" /> </td>
        <td> <input className='editchild' type="text" defaultValue="secondchild" /> </td>
        <td> <input className='editchild' type="text" defaultValue="thirdchild" /> </td>
        <td className='d-flex'>
            <button className='buttonsubmit'>Submit</button>
            <button className='buttoncancel'>Cancel</button>
        </td>
    </tr>
    </>
  )
}

export default TableEdit