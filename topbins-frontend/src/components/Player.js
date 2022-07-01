import React from 'react'
import './Player.css';

const Player = ({ player }) => {
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
            </div>
        </div>
    )
}

export default Player