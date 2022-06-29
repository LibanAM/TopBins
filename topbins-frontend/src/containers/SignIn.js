import React from 'react';
import { useEffect, useRef, useState } from "react";
import { useNavigate} from "react-router-dom";
import './Form.css';

const SignIn = ({setCurrentAcc, setLoggedIn, loggedIn, currentAcc}) => {

  const inputEmail = useRef();
  const inputPassword = useRef();

  const [allUsers, setAllUsers] = useState([])

  useEffect(() => {
    fetch("http://localhost:8080/users")
      .then((response) => response.json())
      .then((data) => setAllUsers(data))
  }, [])

  const handleLogin = (event) => {

    const currentUser = allUsers.filter(user => user.emailAddress == inputEmail.current.value &&
      user.password == inputPassword.current.value)

    if (currentUser.length == 0) {
      alert("Invalid email or password! Please enter a correct email/password")
      return
    }

    setCurrentAcc(currentUser[0]);
    setLoggedIn(!loggedIn);
    // navigate('/playnow');

  }




  return (
    <div>
      <h1>Sign In</h1>
      <div className="form-container">
        <img src="" alt="" ></img>
        <form className="form">
          <input
            className="form-field"
            type="text"
            placeholder="Email"
            name="email"
            ref={inputEmail}
          />
          <input
            className="form-field"
            type="password"
            placeholder="Password"
            name="password"
            ref={inputPassword}
          />
          <button class="signin-btn" type="submit"> Sign In</button>
        </form>
      </div>
    </div>
  );
}

export default SignIn