import React, { useEffect } from "react";
import { useState, useRef } from "react";
import './Account.css';
import { useNavigate } from 'react-router-dom';
import { confirmAlert } from 'react-confirm-alert';
import 'react-confirm-alert/src/react-confirm-alert.css'
import Modal from "react-modal/lib/components/Modal";
import DarkMode from "./DarkMode";
import Admin from "./Admin";



const Account = ({ currentAcc, setCurrentAcc, loggedIn, setLoggedIn }) => {

  const navigate = useNavigate();

  const inputNewName = useRef();
  const inputNewEmail = useRef();

  const [users, setUsers] = useState([]);

  const handleDelete = (event) => {
    event.preventDefault();

    confirmAlert({
      message: "Are you sure you want to delete your account?",
      buttons: [
        {
          label: "Yes",
          onClick: () => {
            fetch(`http://localhost:8080/users/remove/${currentAcc.id}`,
              {
                method: "DELETE",
                headers: { "Content-Type": "application/json" }
              })
            setUsers(users.filter(user => user.id !== currentAcc.id));
            setCurrentAcc({});
            setLoggedIn(!loggedIn);
            navigate('/')

          }
        },
        {
          label: "No",
          onClick: () => { }
        }
      ]
    })
  }

  const [modalIsOpen, setIsOpen] = React.useState(false);

  const customStyles = {
    overlay: {
      backgroundColor: 'rgba(0,0,0,0.7)',
    },
    content: {
      top: '50%',
      left: '50%',
      right: 'auto',
      bottom: 'auto',
      marginRight: '-50%',
      transform: 'translate(-60%, -50%)',
      backgroundColor: 'rgba(0,0,0,0.7)'
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
      name: inputNewName.current.value != "" ? inputNewName.current.value : currentAcc.name,
      emailAddress: inputNewEmail.current.value != "" ? inputNewEmail.current.value : currentAcc.emailAddress,
      password: currentAcc.password,
      score: currentAcc.score,
      admin: currentAcc.admin,
      date: currentAcc.date
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
      {/* // html for background 'flying dots' animation BELOW */}
      <div class="firefly"></div>
      <div class="firefly"></div>
      <div class="firefly"></div>
      <div class="firefly"></div>
      <div class="firefly"></div>
      <div class="firefly"></div>
      <div class="firefly"></div>
      <div class="firefly"></div>
      <div class="firefly"></div>
      <div class="firefly"></div>
      <div class="firefly"></div>
      <div class="firefly"></div>
      <div class="firefly"></div>
      <div class="firefly"></div>
      <div class="firefly"></div>
      {/* html BELOW */}
      <h1>My Account</h1>
      <div className="account-container">
        <div className="account-inner">
          <h2 className="account-heading">{currentAcc.admin ? "ADMIN" : "USER"} PROFILE</h2>
          <ul>
            <label className="account-label">Name:</label>
            <li className="account-list">
              {currentAcc.name}
            </li>
            <br />
            <label className="account-label">Email:</label>
            <li className="account-list">
              {currentAcc.emailAddress}
            </li>
            <br />
            <label className="account-label">High Score:</label>
            <li className="account-list">
              {currentAcc.score}
            </li>
            {/* <br />
            <label className="account-label">Password:</label>
            <li className="account-list">
              {currentAcc.password}
            </li> */}
          </ul>
          <br />
          <button className="edit-btn" onClick={openModal}>Edit</button>
          <Modal isOpen={modalIsOpen} style={customStyles}>
            <h3 className="modal-heading">Edit Profile</h3>
            <form className="account-form-container">
              <p className="edit-input-title">Name</p>
              <input
                type="text"
                placeholder="Name"
                name="Name"
                ref={inputNewName}
              />

              <p className="edit-input-title">Email</p>
              <input
                type="text"
                placeholder="Email"
                name="email"
                ref={inputNewEmail}
              />
            </form>
            <br/>
            <button className="modal-cancel-btn" onClick={closeModal}>Cancel</button>
            <button className="modal-submit-btn" onClick={handleUpdate}>Submit</button>
          </Modal>
          <button className="delete-btn" onClick={handleDelete}>Delete</button>
        </div>
      </div>
      <br /><br /><br />
      {currentAcc.admin && <Admin />}
    </div>
  )
}

export default Account