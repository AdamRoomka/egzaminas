import React, { useState } from 'react'
import Table from '../Pages/Table/Table'
import Create from '../Pages/CreateList/Create'

function Home() {
  const [open, setOpen] = useState(false);
  
  const toggleAddPopup = () => {
    setOpen(!open);
  }


  return (
    <>
      <button className='sukurtibtn' onClick={toggleAddPopup}>Sukurti</button>
      {open ? (
        <Create />
      ) :('')}
    <div className='center'>
      <Table />
    </div>
    </>
  )
}

export default Home