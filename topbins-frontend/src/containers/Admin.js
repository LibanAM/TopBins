import React from 'react'
import PlayerList from '../components/PlayerList'
import { useState, useEffect } from 'react';

const Admin = () => {

    const [players, setPlayers] = useState([]);
    const [query, setQuery] = useState([]);

  useEffect(() => {
    fetch("http://localhost:8080/players")
      .then(response => response.json())
      .then(data => setPlayers(data))
  }, []);

  return (
      <>
          <PlayerList players={players}/>
      </>
  )
}

export default Admin