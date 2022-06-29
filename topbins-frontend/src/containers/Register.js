import React, { useEffect, useRef, useState } from 'react';
import './Register.css';
import { AiOutlineEyeInvisible, AiOutlineEye } from 'react-icons/ai';

const Register = ({ loggedIn, setLoggedIn, setCurrentAcc }) => {

  const inputNewName = useRef();
  const inputNewEmail = useRef();
  const inputNewPassword = useRef();

  const [users, setUsers] = useState();
  const [passwordShown, setPasswordShown] = useState(false);
  const [signupAllowed, setSignupAllowed] = useState([false, false, false]);

  console.log(signupAllowed);

  //Get all the users
  useEffect(() => {
    fetch("http://localhost:8080/users")
      .then(response => response.json())
      .then(data => setUsers(data))
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
      .then(savedUser => setCurrentAcc(savedUser))
    setLoggedIn(!loggedIn);
  }

  //Check if email already exists
  const handleExistingEmail = () => {
    const allEmails = users.map(user => { return user.email });

    let emailChecker = [signupAllowed[0], false, signupAllowed[2]];

    if (allEmails.includes(inputNewEmail.current.value)) {
      document.querySelector('.new-user-email-input').innerHTML = "This email already exists";
      setSignupAllowed(emailChecker);
    }
    else {
      document.querySelector('.new-user-email-input').innerHTML = "";

      emailChecker = [signupAllowed[0], true, signupAllowed[2]];
      setSignupAllowed(emailChecker);
    }
  }

  //Check email format
  const handleCorrectEmail = () => {
    let emailFormatChecker = [signupAllowed[0], false, signupAllowed[2]];

    if (!inputNewEmail.current.value.includes("@")) {
      document.querySelector('new-user-email-input').innerHTML = "Please enter a valid email";
      setSignupAllowed(emailFormatChecker);
    }
    else {
      document.querySelector('new-user-email-input').innerHTML = "";
      emailFormatChecker = [signupAllowed[0], true, signupAllowed[2]];
      setSignupAllowed(emailFormatChecker);
      handleExistingEmail();
    }
  }

  //Check password strength
  const handlePassword = () => {
    let passwordChecker = [signupAllowed[0], signupAllowed[1], false]

    const specialSymbol = ['!', '?', '@', '.', '_', '/', '#', '$', '(', ')', '^', '%',
      '*', ':', ';', '+'];

    if (inputNewPassword.current.value == '1234' || inputNewPassword.current.value == 'abc'
      || inputNewPassword.current.value.length < 8) {
      document.querySelector('.new-user-password-input').innerHTML = "Password strength is weak";

      // didn't pass the password checker
      setSignupAllowed(passwordChecker);
    }
    else if (specialSymbol.filter(s => inputNewPassword.current.value.includes(s)).length == 0) {
      document.querySelector('.new-user-password-input').innerHTML = "Password strength is medium";

      // didn't pass the password checker
      setSignupAllowed(passwordChecker);
    }
    else {
      document.querySelector('.new-user-password-input').innerHTML = "Password strength is strong";

      // pass password checker 
      passwordChecker = [signupAllowed[0], signupAllowed[1], true];
      setSignupAllowed(passwordChecker);

    }
  }

  const handlePasswordShown = (event) => {
    event.preventDefault();
    setPasswordShown(!passwordShown);
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
          <p className="new-user-name-input"></p>

          <p className="register-input-title">Email</p>
          <input
            className="form-field"
            type="text"
            placeholder="Email"
            name="email"
            ref={inputNewEmail}
            onChange={handleCorrectEmail}
          />
          <p className="new-user-email-input"></p>

          <p className="register-input-title">Password</p>
          <input
            className="form-field"
            type={passwordShown ? "text" : "password"}
            placeholder="Password"
            name="password"
            ref={inputNewPassword}
            onChange={handlePassword}
          />
          <button onClick={handlePasswordShown} className="password-shown-btn">
            {passwordShown ? <AiOutlineEye className="password-eye" /> : <AiOutlineEyeInvisible className="password-eye" />}
          </button>
          <p className="new-user-passwor-input"></p>

          <label> <input type="checkbox" name="termsCheckbox" /> I agree to the Terms and Conditions</label>

          <button className="register-btn" type="submit" onClick={handleRegister}> Register </button>

          <p>Already have an account? <a href="/SignIn">Sign In</a></p>

        </form>
      </div>
    </div>
  );
}

export default Register;