import React from 'react'
import './auth.css'

function Login() {
  return (
    <form id='msform'>
        <fieldset>
            <h2 class="fs-title">Create your account</h2><br />
            <input type="email" name="email" placeholder="Email" />
            <input type="password" name="pass" placeholder="Password" />
            <input type="button" name="next" class="next action-button" value="Next" />
        </fieldset>
    </form>
  )
}

export default Login