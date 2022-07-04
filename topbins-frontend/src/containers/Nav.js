import React from 'react'
import { Link } from 'react-router-dom'
import './Nav.css'


const Nav = ({loggedIn, currentAcc, setCurrentAcc, setLoggedIn}) => {
  const handleLogin = (event) => {

    if (loggedIn && currentAcc.length != 0) {
        setLoggedIn(!loggedIn);
        setCurrentAcc({});
        console.log(loggedIn);
        return;
    }

}

  return (
    <nav>
        <ul className="nav-bar">
            <Link to="/"><li className="nav-item">HOME</li></Link>
            <Link to="/playnow"><li className="nav-item">PLAY NOW</li></Link>
            <Link to="/leaderboard"><li className="nav-item">LEADERBOARD</li></Link>
            <div className="dropdown">
                    <button className="dropbtn"> Account</button>
                    <div className="dropdown-content" styleleft="left:0">
                        <a><Link to='/account'>{loggedIn ? "Account" : "Sign in"}</Link></a>
                        <a onClick={handleLogin}><Link to='/register'>{loggedIn ? "Logout" : "Register"}</Link></a>
                    </div>
                </div>
        </ul>

    </nav>
  )
}

export default Nav