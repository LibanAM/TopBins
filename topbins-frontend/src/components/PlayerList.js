import React, { useState } from 'react'
import Player from './Player'
import Modal from "react-modal/lib/components/Modal";

const PlayerList = ({ players, deletePlayer, postPlayer, teams }) => {

    const [statePlayer, setStatePlayer] = useState(
        {
            name: "",
            nationality: "",
            position: "",
            leagueGoals: "",
            internationalGoals: "",
            leagueAppearances: "",
            assists: "",
            yellowCards: "",
            redCards: "",
            team: null,
            imgLink: ""
        }
    )

    const teamOptions = teams.map((team) => {
        return <option key={team.id} value={team.id}>{team.name}</option>
    });

    const handleTeam = (event) => {
        const teamId = parseInt(event.target.value);
        const selectedTeam = teams.find(team => team.id === teamId);
        let copiedPlayer = { ...statePlayer };
        copiedPlayer.team = selectedTeam;
        setStatePlayer(copiedPlayer);
    }

    const [newPosition, setNewPosition] = useState("");

    const handlePosition = (event) => {
        let selectedPosition = event.target.value;
        setNewPosition(selectedPosition);
        let copiedPlayer = { ...statePlayer };
        copiedPlayer.position = selectedPosition
        setStatePlayer(copiedPlayer);
    }

    const handleChange = (event) => {
        console.log(event);
        let propertyName = event.target.name;
        let copiedPlayer = { ...statePlayer };
        copiedPlayer[propertyName] = event.target.value;
        setStatePlayer(copiedPlayer);
    }

    const handleSubmit = (event) => {
        event.preventDefault();

        postPlayer(statePlayer);
        setIsOpen(false);
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

    return (

        <div>
            <button className="add-player-button" onClick={openModal}>Add Player</button>
            <Modal isOpen={modalIsOpen} style={customStyles}>
                <h3>Add new player</h3>
                <form>
                    <p className="edit-input-title">Name</p>
                    <input
                        type="text"
                        placeholder="Name"
                        name="name"
                        onChange={handleChange}
                        value={statePlayer.name}
                    />

                    <p className="edit-input-title">Nationality</p>
                    <input
                        type="text"
                        placeholder="Nationality"
                        name="nationality"
                        onChange={handleChange}
                        value={statePlayer.nationality.toUpperCase()}
                    />

                    <p className="edit-input-title">Position</p>
                    <select type="text" value={newPosition} onChange={handlePosition}>
                        <option>Select a position</option>
                        <option value="GOALKEEPER">GOALKEEPER</option>
                        <option value="DEFENDER">DEFENDER</option>
                        <option value="MIDFIELDER">MIDFIELDER</option>
                        <option value="FORWARD">FORWARD</option>
                    </select><br />

                    <p className="edit-input-title">League Goals</p>
                    <input
                        type="text"
                        placeholder="League Goals"
                        name="leagueGoals"
                        onChange={handleChange}
                        value={statePlayer.leagueGoals}
                    />

                    <p className="edit-input-title">International Goals</p>
                    <input
                        type="text"
                        placeholder="International Goals"
                        name="internationalGoals"
                        onChange={handleChange}
                        value={statePlayer.internationalGoals}
                    />

                    <p className="edit-input-title">League Apperances</p>
                    <input
                        type="text"
                        placeholder="League Appearances"
                        name="leagueAppearances"
                        onChange={handleChange}
                        value={statePlayer.leagueApperances}
                    />

                    <p className="edit-input-title">Assists</p>
                    <input
                        type="text"
                        placeholder="Assists"
                        name="assists"
                        onChange={handleChange}
                        value={statePlayer.assists}
                    />

                    <p className="edit-input-title">Yellow Cards</p>
                    <input
                        type="text"
                        placeholder="Yellow Cards"
                        name="yellowCards"
                        onChange={handleChange}
                        value={statePlayer.yellowCards}
                    />

                    <p className="edit-input-title">Red Cards</p>
                    <input
                        type="text"
                        placeholder="Red Cards"
                        name="redCards"
                        onChange={handleChange}
                        value={statePlayer.redCards}
                    />

                    <p className="edit-input-title">Team</p>
                    <select
                        type="text"
                        onChange={handleTeam}>
                        <option>Select a team</option>
                        {teamOptions}
                    </select>

                    <p className="edit-input-title">Image Link</p>
                    <input
                        type="text"
                        placeholder="URL"
                        name="imgLink"
                        onChange={handleChange}
                        value={statePlayer.imgLink}
                    />
                </form>
                <br />
                <button className="cancel-btn" onClick={closeModal}>Cancel</button>
                <button className="submit-btn" onClick={handleSubmit}>Submit</button>
            </Modal>

            <section className="cards">
                {players.map((player) => (
                    <Player
                        key={player.id}
                        player={player}
                        deletePlayer={deletePlayer} 
                        />
                ))}

            </section>
        </div>

    )
}

export default PlayerList