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
    const allEmails = users.map(user => { return user.email });

    let emailChecker = [false, signupAllowed[1], signupAllowed[2]];

    if (allEmails.includes(inputNewEmail.current.value)) {
      document.querySelector('.new-user-email-input').innerHTML = "This email already exists";
      setSignupAllowed(emailChecker);
    }
    else {
      document.querySelector('.new-user-email-input').innerHTML = "";

      emailChecker = [true, signupAllowed[1], signupAllowed[2]];
      setSignupAllowed(emailChecker);
    }
  }

  //Check email format
  const handleCorrectEmail = () => {
    let emailFormatChecker = [signupAllowed[0], false, signupAllowed[2]];

    if (!inputNewEmail.current.value.includes("@")){
      document.querySelector('new-user-email-input').innerHTML = "Please enter a valid email";
      setSignupAllowed(emailFormatChecker);
    }
    else {
      document.querySelector('new-user-email-input').innerHTML = "";
      emailFormatChecker = [signupAllowed[0], true, signupAllowed[2]];
      setSignupAllowed(emailFormatChecker);
    }
  }

  return (
    <div>
      <h1>Register</h1>
      <div className="register-container">
        <img src="" alt="" ></img>
        <form className="register-form">
          <p className="register-input-title">Name</p>
          <input
            className="form-field"
            type="text"
            placeholder="Name"
            name="Name"
            ref={inputNewName}
          />
          <p className="new-user-name-input">Name</p>

          <p className="register-input-title">Email</p>
          <input
            className="form-field"
            type="text"
            placeholder="Email"
            name="email"
            ref={inputNewEmail}
          />
          <p className="new-user-email-input">Name</p>

          <p className="register-input-title">Password</p>
          <input
            className="form-field"
            type="password"
            placeholder="Password"
            name="password"
            ref={inputNewPassword}
          />
          <p className="new-user-passwor-input">Name</p>

          <label> <input type="checkbox" name="termsCheckbox" /> I agree to the Terms and Conditions</label>
          <button class="form-field" type="submit"> Register </button>
        </form>
      </div>
    </div>
  );
}

export default Register;