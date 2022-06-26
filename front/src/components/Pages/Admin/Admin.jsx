import React from 'react'
import { Link } from "react-router-dom";
import './Home/User/users.css'


function Admin() {
  return (
    <div>
        <Link to="/admin/users" className='usersButton'>Users</Link>
    </div>
  )
}

export default Admin