import React from 'react'
import Player from './Player'

const PlayerList = ({players, deletePlayer}) => {
    return (

        <section className="cards">
            {players.map((player) => (
                <Player
                    key={player.id}
                    player={player}
                    deletePlayer={deletePlayer} />
            ))}

        </section>
        
    )
}

export default PlayerList