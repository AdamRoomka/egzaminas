import React, {useEffect} from 'react'
import { Link, useNavigate } from "react-router-dom";
import './Home/User/users.css'


function Admin() {
  let navigate = useNavigate();

    useEffect(() => { 

        if(localStorage.getItem('role') !== "admin"){
            navigate('/')
        }

      }, []);
  return (
    <div>
        <Link to="/admin/users" className='usersButton'>Users</Link>
    </div>
  )
}

export default Admin