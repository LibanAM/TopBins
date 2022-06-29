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

  //Get all the users
  useEffect(() => {
    fetch("http://localhost:8080/users")
      .then(response => response.json())
      .then(data => setAllUsers(data))
  }, [])

  //Create a new user
  const handleRegister = (event) => {
    event.preventDefault();

    if (signupAllowed.includes(false)) return;

    const newUser = {
      name: inputNewName.current.value,
      email: inputNewEmail.current.value,
      password: inputNewPassword.current.value,
      score: 0,
      isAdmin: false,
    };

    fetch("http://localhost:8080/users",
      {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(newUser)
      })
      .then(response => response.json())
      .then(savedUser => setCurrentAccount(savedUser))
    setIsLogin(!isLogin);
  }

  //Check if email already exists
  const handleExistingEmail = () => {
    const allEmails = users.map(user => {return user.email});

    let emailChecker = [false, signupAllowed[1]]
  }

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