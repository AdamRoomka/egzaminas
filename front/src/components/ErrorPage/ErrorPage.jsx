import React from 'react'
import { Link } from 'react-router-dom'
import './error.css'

function ErrorPage() {
  return (
    <div className='error'>
        <h1>Error</h1> 
        <h2><Link to="/">Go back Home</Link></h2>
    </div>
  )
}

export default ErrorPage