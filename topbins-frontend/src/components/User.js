import React from 'react'
import './User.css';

const User = ({user}) => {

  return (
    <div className="user">
        <h3 className="user-name">Profile</h3>
        <ul className="user-ul">
            <label className="email-label">Email:</label>
            <li>
                {user.emailAddress}
            </li>
            <br/>
            <label className="score-label">Highest Score:</label>
            <li>
                {user.score}
            </li>
        </ul>
    </div>
  )
}

export default User