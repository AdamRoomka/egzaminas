import React, {useEffect, useState} from 'react'
import { Link } from "react-router-dom"
import { getAllUsers, createUser, deleteUsers, updateUser } from '../../../../../api/lib/UsersApi'
import UserList from './UserList'
import EditUser from './EditUser'
import EditPass from './EditPass'
import CreateUser from './CreateUser'

function Users() {

  const [users, setUsers] = useState([])
  const [render, setRender] = useState(false)

  useEffect(() => {
    getAllUsers().then((res) => {
        const userdata = res.data.data.Users;
        setUsers(userdata);
    });

}, [render]);

    const [editId, setEditId] = useState([]);
    const [editIdPass, setEditIdPass] = useState([]);
    const [isOpen, setIsOpen] = useState(false);

    const toggleAddPopup = () => {
      setIsOpen(!isOpen);
    }

    //---OpenEditForm---//
    const handleEdit = (e, subId) => {
        e.preventDefault();
        setEditId(subId); //Open edit form on choosen transaction type
    };

    //---HandleEdit---//
    const submitEdit = async (data, subId) => {
        await updateUser(subId, data).then(() =>
            getAllUsers()
        );
        setRender(prevState => !prevState)
        setEditId()
    }

    const submitEditPass = async (data, subId) => {
        await updateUser(subId, data).then(() =>
            getAllUsers()
        );
        setRender(prevState => !prevState)
        setEditIdPass()
    }

    //---CancelEdit---//
    function cancelEdit() {
        setEditId('');
        console.log('canceling');
    }
    function cancelEditPass() {
        setEditIdPass('');
        console.log('canceling');
    }


    //---OpenEditForm---//
    const handleEditPass = (e, subId) => {
        e.preventDefault();
        setEditIdPass(subId); //Open edit form on choosen transaction type
    };


  return (
    <div>
      <Link to="/admin" className='usersButton'>Go back</Link>


      <button className='createButton' onClick={toggleAddPopup}>Sukurti vartotoja</button>

      {isOpen &&
        <CreateUser 
          setRender={setRender}
        />
      }

      <table id='table' className='resolution'>
        <tbody>
          <tr>
            <th id='id'>id</th>
            <th>username</th>
            <th>email</th>
            <th>role</th>
            <th>password</th>
          </tr>
          {users.map((user) => (
            editId === user._id ? (
              <EditUser
                key={user._id}
                subId={user._id}
                id={user._id}
                defaultData={user}
                setRender={setRender}
                onCancel={cancelEdit}
                onSubmit={submitEdit}
              />
            ) : editIdPass === user._id ? (
              <EditPass
                key={user._id}
                subId={user._id}
                id={user._id}
                defaultData={user}
                setRender={setRender}
                onCancel={cancelEditPass}
                onSubmit={submitEditPass}
              />

            ) : (
              <UserList 
                key={user._id}
                id={user._id}
                subId={user._id}
                userId={user._id}
                name={user.name}
                email={user.email}
                password={user.password}
                role={user.role}
                setRender={setRender}
                editPass={handleEditPass}
                onEdit={handleEdit}
                deleteUsers={deleteUsers}
              />
            )
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default Users