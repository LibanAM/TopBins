import React, { useState } from 'react'
import './Player.css';
import { confirmAlert } from 'react-confirm-alert';
import 'react-confirm-alert/src/react-confirm-alert.css'
import Modal from "react-modal/lib/components/Modal";

const Player = ({ player, deletePlayer }) => {


    const handleDelete = (event) => {
        event.preventDefault();

        confirmAlert({
            title: "Cofirm",
            message: "Are you sure you want to delete your account?",
            buttons: [
                {
                    label: "Yes",
                    onClick: () => { deletePlayer(player.id) }
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
        content: {
            position: "absolute",
            backgroundColor: "#FFF",
            padding: "15px",
            zIndex: "1000",
            width: "35%",
            borderRadius: ".5em"
        },
    };

    function openModal() {
        setIsOpen(true);
    }

    function closeModal() {
        setIsOpen(false);
    }

    const [updatePlayer, setUpdatePlayer] = useState(
        {
            name: player.name,
            nationality: player.nationality,
            position: player.position,
            leagueGoals: "",
            internationalGoals: "",
            leagueAppearances: "",
            assists: "",
            yellowCards: "",
            redCards: "",
            team: player.team,
            imgLink: player.imgLink
        }
    );

    const handleChange = (event) => {
        console.log(event);
        let propertyName = event.target.name;
        let copiedPlayer = { ...updatePlayer };
        copiedPlayer[propertyName] = event.target.value;
        setUpdatePlayer(copiedPlayer);
    }

    const handleUpdate = (event) => {
        event.preventDefault();

        console.log("this is the body: ", updatePlayer);

        fetch(`http://localhost:8080/players/${player.id}`,
            {
                method: "PUT",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(updatePlayer)
            })
            .then(response => response.json())
            .then(data => console.log(data))
        setIsOpen(false);

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
                    <button className="edit-player-btn" onClick={openModal}>Edit</button>
                    <Modal isOpen={modalIsOpen} style={customStyles}>
                        <h3>Edit Player</h3>
                        <form>
                            <p className="edit-input-title">League Goals</p>
                            <input
                                type="text"
                                placeholder={player.leagueGoals}
                                name="leagueGoals"
                                value={updatePlayer.leagueGoals}
                                onChange={handleChange}
                            />

                            <p className="edit-input-title">International Goals</p>
                            <input
                                type="text"
                                placeholder={player.internationalGoals}
                                name="internationalGoals"
                                value={updatePlayer.internationalGoals}
                                onChange={handleChange}
                            />

                            <p className="edit-input-title">League Appearances</p>
                            <input
                                type="text"
                                placeholder={player.leagueAppearances}
                                name="leagueAppearances"
                                value={updatePlayer.leagueAppearances}
                                onChange={handleChange}
                            />

                            <p className="edit-input-title">Assists</p>
                            <input
                                type="text"
                                placeholder={player.assists}
                                name="assists"
                                value={updatePlayer.assists}
                                onChange={handleChange}
                            />

                            <p className="edit-input-title">Yellow Cards</p>
                            <input
                                type="text"
                                placeholder={player.yellowCards}
                                name="yellowCards"
                                value={updatePlayer.yellowCards}
                                onChange={handleChange}
                            />

                            <p className="edit-input-title">Red Cards</p>
                            <input
                                type="text"
                                placeholder={player.redCards}
                                name="redCards"
                                value={updatePlayer.red}
                                onChange={handleChange}
                            />
                        </form>
                        <br />
                        <button className="cancel-btn" onClick={closeModal}>Cancel</button>
                        <button className="submit-btn" onClick={handleUpdate}>Submit</button>
                    </Modal>
                    <button className="delete-player-btn" onClick={handleDelete}>Delete</button>
                </div>
            </div>
        </div>
    )
}

export default Player