import React, {useEffect} from 'react'
import { Link, useNavigate } from "react-router-dom";
import swal from "sweetalert";
import { useForm } from "react-hook-form";
import { createUser } from "../../api/lib/UsersApi";
import './auth.css'

function Registration() {

    let navigate = useNavigate();

    useEffect(() => { 

        if(localStorage.getItem("user") !== null){
            navigate('/')
        }

      }, []);

    const { //CreateUser
        watch,
        register,
        handleSubmit,
        reset,
        formState: { errors },
      } = useForm();
    
    function onSubmit(data) {
        createUser(data)
            .then((result) => {
            swal({
                text: "Registracija sekminga, dabar galite prisijungti",
                icon: "success",
                button: "Puiku",
                timer: 2000,
            });
            })
            .catch((error) => {
            swal({
                text: "Toks vartotojas jau egzistuoja",
                icon: "error",
                button: "Gerai",
                timer: 5000,
            });
            });
        reset();
    }
    let password = watch("password");

  return (
    <form id='msform' onSubmit={handleSubmit(onSubmit)}>
        <fieldset>
            <h2 className="fs-title">Create your account</h2><br />
            <input 
                type="text" 
                name="name" 
                placeholder="Name" 
                {...register("name", {
                    required: "Vardas būtinas",
                    maxLength: 12,
                    minLength: 2,
                    pattern: /^[[^A-Za-ząčęėįšųūžĄČĘĖĮŠŲŪŽ0-9]*$/i,
                })}
            />
            <div className="text-danger fw-light m-2">
                {errors.name?.type === "pattern" && "Negali būti specialų simbolių"}
                {errors.name?.type === "required" && "Vardas būtinas"}
                {errors.name?.type === "minLength" && "Turi būti bent 2 simboliai"}
                {errors.name?.type === "maxLength" && "Ne daugiau kaip 12 simbolių"}
            </div>

            <input 
                type="text" 
                name="email" 
                placeholder="Email" 
                {...register("email", {
                    required: true,
                    maxLength: 50
                })}
            />
            <div className="text-danger fw-light m-2">
                {errors.email?.type === "required" && "El.paštas būtinas"}
                {errors.email?.type === "maxLength" &&
                "Ne daugiau kaip 50 simbolių"}
                {errors.email?.type === "checkEmail" &&
                "El. paštas jau naudojamas."}
            </div>

            <input 
                type="password" 
                name="pass" 
                placeholder="Password" 
                {...register("password", {
                    required: true,
                    minLength: 8,
                    maxLength: 20,
                    pattern: /^(?=.*[0-9])(?=.*[A-Z])[a-zA-Z0-9?!@#$%^&*]/,
                })}
            />
            <div className="text-danger fw-light m-2">
                {errors?.password?.type === "required" && "Slaptažodis būtinas"}
                {errors?.password?.type === "minLength" &&
                "Turi būti bent 8 simboliai"}
                {errors?.password?.type === "maxLength" &&
                "Ne daugiau kaip 20 simbolių"}
                {errors?.password?.type === "pattern" &&
                "Turi būti bent 1 didžioji raidė ir bent 1 simbolis"}
            </div>

            <input 
                type="password" 
                name="cpass" 
                placeholder="Confirm Password" 
                {...register("passwordRepeat", {
                    required: true,
                    minLength: 8,
                    maxLength: 20,
                    validate: { passwordMatch: (value) => value === password },
                })}
            />
            <div className="text-danger fw-light m-2">
                {errors.passwordRepeat?.type === "required" &&
                "Slaptažodis būtinas"}
                {errors.passwordRepeat?.type === "minLength" &&
                "Turi būti bent 8 simboliai"}
                {errors.passwordRepeat?.type === "maxLength" &&
                "Ne daugiau kaip 20 simbolių"}
                {errors.passwordRepeat?.type === "passwordMatch" &&
                "Slaptažodžiai turi sutapti"}
            </div>
            <div className="text-danger fw-light m-2">
                {errors.balance?.type === "maxLength" &&
                "Ne daugiau kaip 10 skaičių"}
            </div>

            <input type="submit" name="next" className="next action-button" value="Next" />
        </fieldset>
    </form>
  )
}

export default Registration