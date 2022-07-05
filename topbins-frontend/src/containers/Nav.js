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

    <nav className="nav-bar">
        <ul className="nav-ul">
            <li className='nav-item'><Link to="/">HOME</Link></li>
            <li className='nav-item'><Link to="/playnow">PLAY NOW</Link></li>
            <li className='nav-item'><Link to="/leaderboard">LEADERBOARD</Link></li>
            <div className="dropdown">
                    <button className="dropbtn"> ACCOUNT</button>
                    <div className="dropdown-content" styleleft="left:0">
                        <a><Link to='/account'>{loggedIn ? "ACCOUNT" : "SIGN IN"}</Link></a>
                        <a onClick={handleLogin}><Link to='/register'>{loggedIn ? "LOGOUT" : "REGISTER"}</Link></a>
                    </div>
                </div>
        </ul>

    </nav>
  )
}

export default Nav