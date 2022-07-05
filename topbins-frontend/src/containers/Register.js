import React, { useEffect, useRef, useState } from 'react';
import './Register.css';
import { AiOutlineEyeInvisible, AiOutlineEye } from 'react-icons/ai';
import { useNavigate } from 'react-router-dom';
import DarkMode from "./DarkMode";

const Register = ({ loggedIn, setLoggedIn, setCurrentAcc }) => {

  const navigate = useNavigate();

  const inputNewName = useRef();
  const inputNewEmail = useRef();
  const inputNewPassword = useRef();

  const [users, setUsers] = useState();
  const [passwordShown, setPasswordShown] = useState(false);
  const [signupAllowed, setSignupAllowed] = useState([false, false]);

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
      emailAddress: inputNewEmail.current.value,
      password: inputNewPassword.current.value,
      score: 0,
      admin: false
    };

    fetch("http://localhost:8080/users/new",
      {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(newUser)
      })
      .then(response => response.json())
      .then(savedUser => setCurrentAcc(savedUser))
    setLoggedIn(!loggedIn);
    navigate('/account');
  }

  ///Check if email already exists
  const handleExistingEmail = () => {
    const allEmails = users.map(user => { return user.emailAddress });

    let emailChecker = [false, signupAllowed[1]];

    if (allEmails.includes(inputNewEmail.current.value)) {
      document.querySelector('.new-user-email-input').innerHTML = "This email already exists";
      setSignupAllowed(emailChecker);
    }
    else {
      document.querySelector('.new-user-email-input').innerHTML = "";

      emailChecker = [true, signupAllowed[1]];
      setSignupAllowed(emailChecker);
    }
  }

  //Check password strength
  const handlePassword = () => {
    let passwordChecker = [signupAllowed[0], false]

    const specialSymbol = ['!', '?', '@', '.', '_', '/', '#', '$', '(', ')', '^', '%',
      '*', ':', ';', '+'];

    if (inputNewPassword.current.value === '1234' || inputNewPassword.current.value === 'abc'
      || inputNewPassword.current.value.length < 6) {
      document.querySelector('.new-user-password-input').innerHTML = "<p style='color:red; font-size:12px'> Password strength is weak</p>";

      // didn't pass the password checker
      setSignupAllowed(passwordChecker);
    }
    else if (specialSymbol.filter(s => inputNewPassword.current.value.includes(s)).length === 0) {
      document.querySelector('.new-user-password-input').innerHTML = "<p style='color:#e7bd15; font-size:12px'> Password strength is medium</p>";

      // didn't pass the password checker
      setSignupAllowed(passwordChecker);
    }
    else {
      document.querySelector('.new-user-password-input').innerHTML = "<p style='color:green; font-size:12px'> Password strength is strong</p>";

      // pass password checker 
      passwordChecker = [signupAllowed[0], true];
      setSignupAllowed(passwordChecker);

    }
  }

  const handlePasswordShown = (event) => {
    event.preventDefault();
    setPasswordShown(!passwordShown);
  }

  return (
    // html for background 'flying dots' animation BELOW

    <div>
      <div class="firefly"></div>
      <div class="firefly"></div>
      <div class="firefly"></div>
      <div class="firefly"></div>
      <div class="firefly"></div>
      <div class="firefly"></div>
      <div class="firefly"></div>
      <div class="firefly"></div>
      <div class="firefly"></div>
      <div class="firefly"></div>
      <div class="firefly"></div>
      <div class="firefly"></div>
      <div class="firefly"></div>
      <div class="firefly"></div>
      <div class="firefly"></div>

      {/* // html for register heading BELOW */}
      <svg xmlns="http://www.w3.org/2000/svg">
        <filter id="motion-blur-filter" filterUnits="userSpaceOnUse">
          <feGaussianBlur stdDeviation="100 0"></feGaussianBlur>
        </filter>
      </svg>
      <br/>
      <span filter-content="S">REGISTER</span>

      {/* html for register form below */}

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

          <p className="register-input-title">Email</p>
          <input
            className="form-field"
            type="text"
            placeholder="Email"
            name="email"
            ref={inputNewEmail}
            onChange={handleExistingEmail}
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
            {passwordShown ? <AiOutlineEye className="password-eye"/> : <AiOutlineEyeInvisible className="password-eye"/>}
          </button>
          <p className="new-user-password-input"></p>
          <br />
          <label> <input type="checkbox" name="condition" className="condition" /> I agree to the Terms and Conditions</label>

          <button className="register-button" type="submit" onClick={handleRegister}> Register </button>

          <p>Already have an account? <a href="/SignIn">Sign In</a></p>

        </form>
      </div>
      <DarkMode />
    </div>

  );
}

export default Register;
