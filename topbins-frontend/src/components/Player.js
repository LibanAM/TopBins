import React from 'react'
import './Player.css';
import { confirmAlert } from 'react-confirm-alert';
import 'react-confirm-alert/src/react-confirm-alert.css'

const Player = ({ player, deletePlayer }) => {

    // const handleDelete = () => {
    //     deletePlayer(player.id)
    // }
    const handleDelete = (event) => {
        event.preventDefault();
    
        confirmAlert({
          title:"Cofirm",
          message:"Are you sure you want to delete your account?",
          buttons:[
            {
              label: "Yes",
              onClick: () => {deletePlayer(player.id)}
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
            <div className="player-container">
                <div className="card-image">
                    <img src="" alt="" />
                </div>
                <div className="card-conent">
                    <ul>
                        <li>
                            <strong> Name:</strong><br />
                            {player.name}
                        </li>
                        <br />
                        <li>
                            <strong> Team:</strong><br />
                            {player.team.name}
                        </li>
                    </ul>
                    <button className="edit-player-btn">Edit</button>
                    <button className="delete-player-btn" onClick={handleDelete}>Delete</button>
                </div>
            </div>
        </div>
    )
}

export default Player