import React, { useState } from 'react';
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";

function EditUser({ id, deleteUsers, subId, setRender, onSubmit, onCancel, defaultData }) {

    const [name, setName] = useState(defaultData.name);
    const [email, setEmail] = useState(defaultData.email);
    const [password, setPassword] = useState(defaultData.password);
    const [role, setRole] = useState(defaultData.role);
const bcrypt = require("bcryptjs");

    const [editpopup, setEditPopUp] = useState(false);

    const toggleEditPopUp = () => {
        setEditPopUp(!editpopup)
    }

    const editFlows = () => {
        const hash = bcrypt.hashSync(password, 10);
        let userSet = {
            password: hash
        };
        onSubmit(subId, userSet, defaultData)
    }

    const {
        register,
        handleSubmit,
        formState: { errors }
    } = useForm({});
    
  return (
    <tr>
        <td id='id'>{id}</td>
        <td>{name}</td>
        <td>{email}</td>
        <td>{role}</td>
        <td>
            <input 
            type="password" 
            {...register("password", {
                required: true,
                minLength: 8,
                maxLength: 20,
                pattern: /^(?=.*[0-9])(?=.*[A-Z])[a-zA-Z0-9?!@#$%^&*]/,
            })}
            onChange={(e) => setPassword(e.target.value)} />

            <div className="text-danger fw-light m-2">
                {errors?.password?.type === "required" && "Slaptažodis būtinas"}
                {errors?.password?.type === "minLength" &&
                "Turi būti bent 8 simboliai"}
                {errors?.password?.type === "maxLength" &&
                "Ne daugiau kaip 20 simbolių"}
                {errors?.password?.type === "pattern" &&
                "Turi būti bent 1 didžioji raidė ir bent 1 simbolis"}
            </div>
        </td>
        <td className='d-flex'>
          <button className='buttonedit' onClick={handleSubmit(editFlows)}>Patvirtinti</button>
          <button className='buttondelete' onClick={() => onCancel()}>Atšaukti</button>
        </td>
    </tr>
  )
}

export default EditUser