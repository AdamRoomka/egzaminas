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
        // const hash = bcrypt.hashSync(password, 10);
        let userSet = {
            name: name,
            email: email,
            // password: hash,
            role: role
        };
        onSubmit(subId, userSet, defaultData)
    }

    const userSchema = yup.object().shape({
        name: yup
            .string()
            .min(2, 'Galimas minimalus 2-iejų raidžių kiekis')
            .max(30, 'Galimas maksimalus 30-ties raidžių kiekis')
            .transform((_, name) => {
                if (!name) {
                    return errors.name
                } else if (name.includes(' ')) {
                    return name.replace(' ', '')
                }
                return name
            })
            .nullable(false)
            .strict()
            .required()
    })

    const {
        register,
        handleSubmit,
        formState: { errors }
    } = useForm({
        resolver: yupResolver(userSchema)
    });
    
  return (
    <tr>
        <td id='id'>{id}</td>
        <td><input type="text" {...register('name')} defaultValue={defaultData.name} onChange={(e) => setName(e.target.value)} /></td>
        <td><input type="email" {...register('email')} defaultValue={defaultData.email} onChange={(e) => setEmail(e.target.value)} /></td>
        <td>
            <select name="role" id="role" {...register('role')} onChange={(e) => setRole(e.target.value)}>
                <option value={defaultData.role}>{defaultData.role}</option>
                <option>user</option>
                <option>admin</option>
            </select>
        </td>
        <td></td>
        <td className='d-flex'>
          <button className='buttonedit' onClick={handleSubmit(editFlows)}>Patvirtinti</button>
          <button className='buttondelete' onClick={() => onCancel()}>Atšaukti</button>
        </td>
    </tr>
  )
}

export default EditUser