import React from "react";
import { useState, useRef} from "react";
import './Account.css';
import { useNavigate } from 'react-router-dom';
import { confirmAlert } from 'react-confirm-alert';
import 'react-confirm-alert/src/react-confirm-alert.css'
import Modal from "react-modal/lib/components/Modal";

const Account = ({ currentAcc, setCurrentAcc, loggedIn, setLoggedIn }) => {

  const navigate = useNavigate();

  const inputNewName = useRef();
  const inputNewEmail = useRef();

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
            navigate('/')

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
    event.preventDefault()

    const updateUser = {
      name: inputNewName.current.value,
      emailAddress: inputNewEmail.current.value,
      password: currentAcc.password,
      score: currentAcc.score,
      admin: currentAcc.admin
    };

    fetch(`http://localhost:8080/users/update/${currentAcc.id}`, 
    {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(updateUser)
    })
    .then(response => response.json())
    .then(savedUser => setCurrentAcc(savedUser))
    setIsOpen(false);
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
            ref={inputNewName}
          />

          <p className="edit-input-title">Email</p>
          <input
            className="form-field"
            type="text"
            placeholder="Email"
            name="email"
            ref={inputNewEmail}
          />
          </form>
          <button className="cancel-btn" onClick={closeModal}>Cancel</button>
          <button className="submit-btn" onClick={handleUpdate}>Submit</button>
        </Modal>
        <button className="delete-btn" onClick={handleDelete}>Delete</button>
      </div>
      <br/><br/><br/>
    </div>
  )
}

export default Account