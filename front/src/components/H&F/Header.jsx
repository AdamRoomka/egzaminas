import React from 'react'
import { Link } from "react-router-dom";
import './HandF.css'

function Header() {
  return (
    <header>
        <h1><Link to="/" className='namepages'>NamePages</Link></h1>
        <div className="link">
            <div className='btnAuth'><Link to="/register" className='buttonSignup'>Register</Link></div>
            <div className='btnAuth'><Link to="/login" className='buttonLogin'>Login</Link></div>
        </div>
    </header>
  )
}

export default Header