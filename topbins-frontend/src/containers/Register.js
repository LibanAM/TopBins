import React, { useEffect, useRef, useState } from 'react';
import './Form.css';

const Register = () => {
  
  const inputNewName = useRef();
  const inputNewEmail = useRef();
  const inputNewPassword = useRef();
  const [users, setUsers] = useState();
  const [passwordShown, setPasswordShown] = useState(false);
  const [signupAllowed, setSignupAllowed] = useState([false, false, false]);

  console.log(allowedSignup);

  useEffect(() => {
    fetch("http://localhost:8080/users")
        .then(response => response.json())
        .then(data => setAllUsers(data))
}, [])

  return (
    <div>
      <h1>Register</h1>
      <div className="form-container">
        <img src="" alt="" ></img>
        <form className="register-form">
          <input
            className="form-field"
            type="text"
            placeholder="Name"
            name="Name"
            ref={inputNewName}
          />
          <input
            className="form-field"
            type="text"
            placeholder="Email"
            name="email"
            ref={inputNewEmail}
          />
          <input
            className="form-field"
            type="password"
            placeholder="Password"
            name="password"
            ref={inputNewPassword}
          />
          <label> <input type="checkbox" name="termsCheckbox" /> I agree to the Terms and Conditions</label>
          <button class="form-field" type="submit"> Register </button>
        </form>
      </div>
    </div>
  );
}

export default Register;