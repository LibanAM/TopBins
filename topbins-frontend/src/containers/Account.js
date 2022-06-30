import React from "react";
import { useState} from "react";
import './Account.css';
import { useNavigate } from 'react-router-dom';
import { confirmAlert } from 'react-confirm-alert';
import 'react-confirm-alert/src/react-confirm-alert.css'
import Modal from "react-modal/lib/components/Modal";

const Account = ({ currentAcc, setCurrentAcc, loggedIn, setLoggedIn }) => {

  const navigate = useNavigate();

  const [users, setUsers] = useState([]);

  const handleDelete = (event) => {
    event.preventDefault();

    confirmAlert({
      title:"Cofirm",
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
            setUsers(users.filter(user => user.id !== currentAcc.id));
            setCurrentAcc([]);
            setLoggedIn(!loggedIn);
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

  const[modalIsOpen, setIsOpen] = React.useState(false);

  const customStyles = {
    content: {
      top: '50%',
      left: '50%',
      right: 'auto',
      bottom: 'auto',
      marginRight: '-50%',
      transform: 'translate(-60%, -50%)',
    },
  };

  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }

  const handleUpdate = (event) => {
    event.preventDefault();

    
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
        <button className="edit-btn" onClick={openModal}>Edit</button>
        <Modal isOpen={modalIsOpen} style={customStyles}>
          <h3>Edit Profile</h3>
          <form>
          <p className="edit-input-title">Name</p>
          <input
            className="form-field"
            type="text"
            placeholder="Name"
            name="Name"
          />

          <p className="edit-input-title">Email</p>
          <input
            className="form-field"
            type="text"
            placeholder="Email"
            name="email"
          />
          </form>
          <button className="cancel-btn" onClick={closeModal}>Cancel</button>
          <button className="submit-btn">Submit</button>
        </Modal>
        <button className="delete-btn" onClick={handleDelete}>Delete</button>
      </div>
    </div>
  )
}

export default Account