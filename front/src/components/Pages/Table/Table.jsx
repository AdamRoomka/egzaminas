import React, { useState } from 'react'
import TableList from './TableList'
import TableEdit from './TableEdit'
import './table.css'

function Table() {
    const [editId, ] = useState(  ); // 
  return (
      <table id='table'>
          <tr>
            <th></th>
            <th>first</th>
            <th>second</th>
            <th>third</th>
            <th></th>
          </tr>
          {editId ? (
              <TableEdit 
                  // subId={filterData._id}
                  // id={userId}
                  // defaultData={filterData}
                  // onCancel={cancelEdit}
                  // onSubmit={submitEdit}
              />
          ) : (
              <TableList 
                  // onEdit={handleEdit}
                  // onDelete={handleDelete}
              />
          )
          }
      </table>
  )
}

export default Table