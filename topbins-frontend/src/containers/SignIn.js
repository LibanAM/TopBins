import React from 'react';
import { useEffect, useRef, useState } from "react";
import './SignIn.css';
import { AiOutlineEyeInvisible, AiOutlineEye } from 'react-icons/ai';
import { useNavigate} from "react-router-dom";

const SignIn = ({ setCurrentAcc, setLoggedIn, loggedIn, currentAcc }) => {

  const navigate = useNavigate();

  const inputEmail = useRef();
  const inputPassword = useRef();

  const [allUsers, setAllUsers] = useState([])
  const [passwordShown, setPasswordShown] = useState(false);

  useEffect(() => {
    fetch("http://localhost:8080/users")
      .then((response) => response.json())
      .then((data) => setAllUsers(data))
  }, [])

  const handleLogin = (event) => {

    const currentUser = allUsers.filter(user => user.emailAddress == inputEmail.current.value &&
      user.password == inputPassword.current.value)

      console.log(currentUser);
    if (currentUser.length == 0) {
      alert("Invalid email or password! Please enter a correct email/password")
      return
    }

    setCurrentAcc(currentUser[0]);
    setLoggedIn(!loggedIn);
    navigate('/account');



  }

  const handlePasswordShown = (event) => {
    event.preventDefault();
    setPasswordShown(!passwordShown);
  }

  return (
    <div>
      <h1>Sign In</h1>
      <div className="signin-container">
        <img src="" alt="" ></img>
        <form className="signin-form">
          <p>Email</p>
          <input
            className="form-field"
            type="text"
            placeholder="Email"
            name="email"
            ref={inputEmail}
          />
          <p>Password</p>
          <input
            className="form-field"
            type={passwordShown ? "text" : "password"}
            placeholder="Password"
            name="password"
            ref={inputPassword}
          />
          <button onClick={handlePasswordShown} className="btn">
            {passwordShown ? <AiOutlineEye className="password-eye" /> : <AiOutlineEyeInvisible className="password-eye" />}
          </button>
          <button className="signin-btn" type="submit" onClick={handleLogin}> Sign In</button>

          <p>New user? <a href="/register">Sign Up</a></p>
        </form>
      </div>
    </div>
  );
}

export default SignIn