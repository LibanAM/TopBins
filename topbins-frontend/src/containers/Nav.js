import React from 'react'
import { Link } from 'react-router-dom'
import './Nav.css'


const Nav = () => {

  return (
    <nav>
        <ul className="nav-bar">
            <Link to="/"><li className="nav-item">HOME</li></Link>
            <Link to="/playnow"><li className="nav-item">PLAY NOW</li></Link>
            <Link to="/leaderboard"><li className="nav-item">LEADERBOARD</li></Link>
            <Link to="/account"><li className="nav-item">ACCOUNT</li></Link>
        </ul>

    </nav>
  )
}

export default Nav