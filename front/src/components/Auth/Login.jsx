import React from 'react'
import { useForm } from "react-hook-form";
import { useGlobalUserContext, UserContext } from "../../untils/context/UserContext";
import { useNavigate } from "react-router-dom";
import swal from "sweetalert";
import './auth.css'

function Login() {
  const { doLogin } = useGlobalUserContext(UserContext);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  let navigate = useNavigate();

  function onSubmit(data) {
    doLogin(data)
      .then((res) => {
        let email = res.data.email;

        swal({
          text: "Pavyko prisijungti!",
          icon: "success",
          button: "Puiku",
          timer: 5000,
        });
        if (res.status === 200) {
          setTimeout(() => {
            navigate("/Home");
          }, 1000);
        }
      })
      .catch((error) => {
        console.error("Error:", error);
        swal({
          text: "Duomenys blogai suvesti, patikrinkite duomenis!",
          icon: "error",
          button: "Gerai",
          timer: 2000,
        });
      });
  }

  return (
    <form id='msform' onSubmit={handleSubmit(onSubmit)}>
        <fieldset>
            <h2 className="fs-title">Prisijungti</h2><br />
            <input
            type="email"
            className="home-input"
            id="email-login"
            placeholder="El. paštas"
            {...register("email", {
              required: "El.paštas būtinas",
              maxLength: {
                value: 50,
                message: "Nedaugiau kaip 50 simbolių",
              },
            })}
          />
          <div className="error text-danger fw-light m-2">
            {errors.email?.message}
          </div>
          <input
            className="home-input"
            type="password"
            name="password"
            placeholder="Slaptažodis"
            {...register("password", {
              required: "Slaptažodis būtinas",
              minLength: {
                value: 8,
                message: "Turi būti bent 8 simboliai",
              },
              maxLength: {
                value: 20,
                message: "Nedaugiau kaip 20 simbolių",
              },
            })}
          />
          <div className="error text-danger fw-light m-2">
            {errors.password?.message}
          </div>
            <button type="submit" name="next" className="next action-button" value="Next">Prisijungti</button>
            <button type="reset" name="next" className="next action-button" value="Next">Atšaukti</button>
        </fieldset>
    </form>
  )
}

export default Login