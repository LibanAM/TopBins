import React from 'react'
import PlayerList from '../components/PlayerList'
import { useState, useEffect } from 'react';
import Search from '../components/Search';
import Player from '../components/Player';

const Admin = () => {

    const [players, setPlayers] = useState([]);
    const [query, setQuery] = useState([]);

    useEffect(() => {
        fetch(`http://localhost:8080/players?name=${query}`)
            .then(response => response.json())
            .then(data => setPlayers(data))
    }, [query]);

    const deletePlayer = (id) => {
        fetch(`http://localhost:8080/players/${id}`, {
            method: "DELETE",
            headers: { "Content-Type": "application/json" }
        })
        setPlayers(players.filter(player => player.id !== id))
    }

    return (
        <>
            <Search getQuery={(q) => setQuery(q)} />
            <PlayerList
                players={players}
                deletePlayer={deletePlayer} />
        </>
    )
}

export default Admin