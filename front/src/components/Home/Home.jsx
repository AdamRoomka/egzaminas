import React, { useState, useEffect } from 'react'
import { Link, useNavigate } from "react-router-dom";

function Home() {
  const [open, setOpen] = useState(false);
  
  const toggleAddPopup = () => {
    setOpen(!open);
  }
  let navigate = useNavigate();

  useEffect(() => { 

    if(localStorage.getItem("user") === null){
        navigate('/register')
    }

  }, []);

  return (
    <>
    <div className='center'>
      <Link to="/books" className="buttonedit">Order Books</Link>
      <Link to="/profile" className="buttondelete">Profile Table</Link>
    </div>
    </>
  )
}

export default Home