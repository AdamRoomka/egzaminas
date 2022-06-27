import React from 'react'
import "./book.css"

function Book({data}) {
  return (
    <div>
      {data.name}
    </div>
  )
}

export default Book