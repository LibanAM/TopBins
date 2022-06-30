import { useState, useEffect } from "react";
import './Account.css';
import { useNavigate } from 'react-router-dom';
import { confirmAlert } from 'react-confirm-alert';
import 'react-confirm-alert/src/react-confirm-alert.css'

const Account = ({ currentAcc }) => {

  const navigate = useNavigate();

  const [users, setUsers] = useState([]);

  const handleDelete = (event) => {
    event.preventDefault();

    confirmAlert({
      message:"Are you sure you want to delete your account?",
      buttons:[
        {
          label: "Yes",
          onClick: () => {
            fetch(`http://localhost:8080/users/remove/${currentAcc.id}`, 
            {
              method: "DELETE",
              headers: { "Content-Type": "application/json" }
            })
            setUsers(users.filter(user => user.id !== currentAcc.id))
            navigate('/signIn')
          }
        },
        {
          label: "No",
          onClick: () => {}
        }
      ]
    })




  }

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
        <br/>
        <button className="edit-btn">Edit</button>
        <button className="delete-btn" onClick={handleDelete}>Delete</button>
      </div>
    </div>
  )
}

export default Account