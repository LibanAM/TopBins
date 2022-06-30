import { useState, useEffect } from "react";
import './Account.css';

const Account = ({ currentAcc }) => {

  const [users, setUsers] = useState([]);

  return (
    <div>
      <h1>My Account</h1>
      <div className="account-container">
        <h3>Profile</h3>
        <ul>
          <label>Name:</label>
          <li>
            {currentAcc.name}
          </li>
          <br />
          <label>Email:</label>
          <li>
            {currentAcc.emailAddress}
          </li>
          <br />
          <label>High Score:</label>
          <li>
            {currentAcc.score}
          </li>
        </ul>
        <button className="edit-btn">Edit</button>
        <button className="delete-btn">Delete</button>
      </div>
    </div>
  )
}

export default Account