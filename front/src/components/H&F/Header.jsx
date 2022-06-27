import React, { useState } from 'react'
import { useEffect } from 'react';
import { Link } from "react-router-dom";
import { useGlobalUserContext, UserContext } from "../../untils/context/UserContext";
import './HandF.css'

function Header({render, setRender}) {
  const { signOut } = useGlobalUserContext(UserContext);
  const [ registered, setRegistered ] = useState(false);

  useEffect(() => { 
    if(localStorage.getItem("user") === null){
      setRegistered(!registered)
    }
  }, [render]);
  let name = localStorage.getItem("name")
  
  return (
    <header>
        <h1><Link to="/" className='namepages'>NamePages</Link></h1>
        <div className="link">
          {registered && 
            <>
              <div className='btnAuth'><Link to="/register" className='buttonSignup'>Register</Link></div>
              <div className='btnAuth'><Link to="/login" className='buttonLogin'>Login</Link></div>
            </>
          }
          {!registered && 
            <>
              <div className='btnAuth d-flex'><h4>Sveiki </h4><h4 className='red'>{name}</h4></div>
              <div className='btnAuth'><Link to="/login" className='buttonLogOut' onClick={signOut}>SignOut</Link></div>
            </>
          }
        </div>
    </header>
  )
}

export default Header