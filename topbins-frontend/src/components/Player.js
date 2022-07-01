import React from 'react'
import './Player.css';

const Player = ({ player, deletePlayer }) => {

    const handleDelete = () => {
        deletePlayer(player.id)
    }

    return (
        <div className="player-container">
                <div className="card-image">
                    <img src="" alt="" />
                </div>
                <div className="card-conent">
                    <ul>
                        <li>
                            <strong> Name:</strong><br/>
                            {player.name}
                        </li>
                        <br/>
                        <li>
                            <strong> Team:</strong><br/>
                            {player.team.name}
                        </li>
                    </ul>
                    <button className="edit-player-btn">Edit</button>
                    <button className="delete-player-btn" onClick={handleDelete}>Delete</button>
                </div>
        </div>
    )
}

export default Player