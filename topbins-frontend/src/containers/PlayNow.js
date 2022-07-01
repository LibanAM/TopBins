import { useState, useEffect } from "react";
import Nav from "./Nav";
import './PlayNow.css';
import usePersistedState from "../usePersistedState";






const PlayNow = ({ loggedIn, currentAcc }) => {

    // const [allPlayers, setAllPlayers] = usePersistedState('allPlayers', []);
    const [allPlayers, setAllPlayers] = useState([]);
    let [foundPlayer, setFoundPlayer] = useState([])
    let [foundNextPlayer, setNextFoundPlayer] = useState([])
    const [gameStarted, setGameStarted] = useState(false);
    const [valueLeft, setValueLeft] = useState("")
    const [valueRight, setValueRight] = useState("")



    useEffect(() => {
        fetch("http://localhost:8080/players")
            .then((response) => response.json())
            .then((data) => setAllPlayers(data));
    }, []);

    // useEffect(() => {
    //     console.log(allPlayers);
    //     // setTimeout(fetchRandomPlayer, 50)
    //     // fetchRandomPlayer()
    // }, [allPlayers])

    let randomPlayerNumber;
    const fetchRandomPlayer = () => {
        randomPlayerNumber = Math.round(Math.random() * 99)
        let randomPlayer = allPlayers.filter(player => player.id == randomPlayerNumber)
        setFoundPlayer(randomPlayer[0])
        console.log(randomPlayer);
        // setPlayerImage(randomPlayer.imgLink)
        // console.log(playerImage);
        // randomAttribute()

        
    }
    
    const randomAttribute = () => {
        const keys = Object.keys(foundPlayer);
        const keysFiltered = keys.filter(key => key.search("id") && key.search("imgLink") && key.search("name") 
                                                && key.search("id") && key.search("team") && key.search("position")
                                                && key.search("nationality"))
        const randomNumber = Math.floor(Math.random() * keysFiltered.length);
        const randomKey = keysFiltered[randomNumber];
        setValueLeft(foundPlayer[randomKey])
        console.log(valueLeft)
    }

    useEffect(() => {
        randomAttribute()
    }, [foundPlayer])

    let nextRandomNumber;
    const nextPlayer = () => {
        nextRandomNumber = Math.round(Math.random() * 99);
        while (nextRandomNumber === randomPlayerNumber) {
            nextRandomNumber = Math.round(Math.random() * 99);
        }
        let nextRandomPlayer = allPlayers[nextRandomNumber]
        setNextFoundPlayer(nextRandomPlayer)
        console.log(nextRandomPlayer);
        nextRandomNumber = Math.round(Math.random() * 99);
    }

    const randomAttributeNextPlayer = () => {
        const keys = Object.keys(foundNextPlayer);
        const keysFiltered = keys.filter(key => key.search("id") && key.search("imgLink") && key.search("name") 
                                                && key.search("id") && key.search("team") && key.search("position")
                                                && key.search("nationality"))
        const randomNumber = Math.floor(Math.random() * keysFiltered.length);
        const randomKey = keysFiltered[randomNumber];
        setValueRight(foundNextPlayer[randomKey])
        console.log(valueRight)
    }

    useEffect(() => {
        randomAttributeNextPlayer()
    }, [foundNextPlayer])


    const hasGameStarted = () => {
        setGameStarted(!gameStarted)
    }
    const start = () => {
        hasGameStarted()
        fetchRandomPlayer()
        nextPlayer()
        randomAttribute()
        // console.log(currentAcc);
    }

    const higher = () => {
        setFoundPlayer(foundNextPlayer)
        nextPlayer()
        console.log("Player chose higher.");
    }

    const lower = () => {
        setFoundPlayer(foundNextPlayer)
        nextPlayer()
        randomAttribute()
        randomAttributeNextPlayer()

        console.log("Player chose lower.");

    }

    return (
        <>
            <Nav />
            {!gameStarted && <button onClick={start}>START GAME</button>}
            {gameStarted && <div className="game-pictures">
                <img src={foundPlayer.imgLink} alt={foundPlayer.name} />
                <p>{foundPlayer.name}</p>
                <p>leagueGoals</p>
                <p>{valueLeft}</p>
            </div>}

            {gameStarted && <div className="game-pictures">
                {gameStarted && <img src={foundNextPlayer.imgLink} alt={foundNextPlayer.name} />}
                {gameStarted && <p>{foundNextPlayer.name}</p>}
                {gameStarted && <p>leagueGoals</p>}
                <p>{valueRight}</p>
                {gameStarted && <button onClick={higher}>higher</button>}
                {gameStarted && <button onClick={lower}>lower</button>}
            </div>}

            <div>
                {/* <p>Current score: {score}</p> */}
                {loggedIn && <p>High-Score: {currentAcc.score}</p>}
            </div>

        </>
    );
}

export default PlayNow