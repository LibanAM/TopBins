import React from 'react'
import Player from './Player'

const PlayerList = ({players}) => {
    return (

        <section className="cards">
            {players.map((player) => (
                <Player
                    key={player.id}
                    player={player} />
            ))}

        </section>
        
    )
}

export default PlayerList