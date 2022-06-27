import React from 'react'
import "./book.css"

function Book({data}) {
  let Data = data.date.substring(0, 10);
  return (
    <div className='row m-3'>
      <div className="col-12"><h3>{data.name}</h3></div>
      <div className="col-12"><h5>{data.category}</h5></div>
      <div className="col-12"><p>Select me to read that book</p></div>
      <div className="col-12"><button className="buttonOrder">Order</button></div>
    </div>
  )
}

export default Book