import React from 'react'
import Swal from "sweetalert2";

function UserList({ id, name, email, password, role, deleteUsers, userId, subId, setRender, onEdit, editPass }) {

    const handleDelete = (e, userId) => {
        e.preventDefault();
        Swal
            .fire({
                title: 'Ar tikrai norite pašalinti?',
                text: 'Šis vartotojas bus prarasta negražinamai',
                icon: 'question',
                showCancelButton: true,
                cancelButtonText: 'Atšaukti',
                confirmButtonText: 'Panaikinti',
            })

            .then((result) => {
                if (result.isConfirmed) {
                    Swal
                        .fire({
                            title: 'Jūsų pasirinkta vartotoja sėkmingai pašalinta!',
                            icon: 'success',
                            confirmButtonText: 'Puiku!'
                        })
                    const postUser = {
                        method: 'PATCH',
                        headers: { 'Content-Type': 'application/json' },
                        body: JSON.stringify({
                            text: 'delete vartotoja',
                            value: "Ištrynė",
                        })
                    };

                    deleteUsers(userId) //Delete choosen transaction type form database;
                    setRender(prevState => !prevState)
                } else if (result.isDenied) {
                    Swal.close()
                }
            })
    }
  return (
    <tr>
        <td id='id'>{id}</td>
        <td>{name}</td>
        <td>{email}</td>
        <td>{role}</td>
        <td><button className='buttoneditPass' onClick={(e) => editPass(e, subId)}>Change</button></td>
        <td className='d-flex'>
          <button className='buttonedit' onClick={(e) => onEdit(e, subId)}>Edit</button>
          <button className='buttondelete' onClick={(e) => handleDelete(e, userId)}>Delete</button>
        </td>
    </tr>
  )
}

export default UserList