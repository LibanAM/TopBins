import React from 'react'
import './Player.css';
import { confirmAlert } from 'react-confirm-alert';
import 'react-confirm-alert/src/react-confirm-alert.css'
import Modal from "react-modal/lib/components/Modal";

const Player = ({ player, deletePlayer}) => {


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

    const handleUpdate = (event) => {
        event.preventDefault();


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
                                placeholder="League Goals"
                                name="leagueGoals"
                            />

                            <p className="edit-input-title">International Goals</p>
                            <input
                                type="text"
                                placeholder="International Goals"
                                name="internationalGoals"
                            />

                            <p className="edit-input-title">League Appearances</p>
                            <input
                                type="text"
                                placeholder="League Appearances"
                                name="leagueAppearances"
                            />

                            <p className="edit-input-title">Assists</p>
                            <input
                                type="text"
                                placeholder="Assists"
                                name="assists"
                            />

                            <p className="edit-input-title">Yellow Cards</p>
                            <input
                                type="text"
                                placeholder="Yellow Cards"
                                name="yellowCards"
                            />

                            <p className="edit-input-title">Red Cards</p>
                            <input
                                type="text"
                                placeholder="Red Cards"
                                name="redCards"
                            />
                        </form>
                        <br/>
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