import { useState, useEffect } from "react";
import usePersistedState from "../usePersistedState";
import Nav from "./Nav";
import './PlayNow.css'





const PlayNow = ({ currentAcc }) => {

    const [allPlayers, setAllPlayers] = useState([]);
    let [foundPlayer, setFoundPlayer] = useState([])
    let [foundNextPlayer, setNextFoundPlayer] = useState([])
    const [attribute, setAttribute] = useState("")
    const [gameStarted, setGameStarted] = useState(false);



    useEffect(() => {
        fetch("http://localhost:8080/players")
            .then((response) => response.json())
            .then((data) => setAllPlayers(data));
    }, []);

    useEffect(() => {
        console.log(allPlayers);
        // setTimeout(fetchRandomPlayer, 50)
        // fetchRandomPlayer()
    }, [allPlayers])

    let randomPlayerNumber;
    const fetchRandomPlayer = () => {
        randomPlayerNumber = Math.round(Math.random() * 99)
        let randomPlayer = allPlayers[randomPlayerNumber]
        setFoundPlayer(randomPlayer)
        console.log(randomPlayer);
        // setPlayerImage(randomPlayer.imgLink)
        // console.log(playerImage);
    }

    let randomNumber;
    var randomPropertyName;
    var randomPropertyValue;

    const randomAttribute = () => {
        randomNumber = Math.round(Math.random() * 3)
        var keys = Object.keys(foundPlayer)
        randomPropertyValue = foundPlayer[keys[keys.length * Math.random() << 0]]
        console.log(foundPlayer[keys[keys.length * Math.random() << 0]])
        console.log(randomPropertyValue);

    }

    let nextRandomNumber;
    const nextPlayer = () => {
        nextRandomNumber = Math.round(Math.random() * 99);
        while (nextRandomNumber === randomPlayerNumber) {

            nextRandomNumber = Math.round(Math.random() * 99);
        };
        console.log(nextRandomNumber);
        console.log(randomPlayerNumber);
        let nextRandomPlayer = allPlayers[nextRandomNumber]
        setNextFoundPlayer(nextRandomPlayer)
        console.log(nextRandomPlayer);
        nextRandomNumber = Math.round(Math.random() * 99);
        // let attributeNext;
        // if (randomNumber == 0) {

        //     attributeNext = 'leagueGoals'
        // } else if (randomNumber == 1) {

        //     attributeNext = 'internationalGoals'
        // } else if (randomNumber == 2) {

        //     attributeNext = 'leagueAppearances'
        // } else if (randomNumber == 3) {

        //     attributeNext = 'assists'
        // }
    }


    const hasGameStarted = () => {
        setGameStarted(!gameStarted)
    }
    const start = () => {
        hasGameStarted()
        fetchRandomPlayer()
        nextPlayer()
        randomAttribute()
    }

    const higher = () => {
        setFoundPlayer(foundNextPlayer)
        nextPlayer()
        console.log("Player chose higher.");
    }

    const lower = () => {
        setFoundPlayer(foundNextPlayer)
        nextPlayer()
        console.log("Player chose lower.");

    }

    return (
        <>
            <Nav />
            {!gameStarted && <button onClick={start}>START GAME</button>}
            <div className="game-pictures">
                <img src={foundPlayer.imgLink} alt={foundPlayer.name} />
                <p>{foundPlayer.name}</p>
                <p>leagueGoals</p>
                <p>{randomPropertyValue}</p>
            </div>

            <div className="game-pictures">
                <img src={foundNextPlayer.imgLink} alt={foundNextPlayer.name} />
                <p>{foundNextPlayer.name}</p>
                <p>leagueGoals</p>
                {/* <p>{foundNextPlayer.{attributeName}}</p> */}
                {gameStarted && <button onClick={higher}>higher</button>}
                {gameStarted && <button onClick={lower}>lower</button>}
            </div>

        </>
    );
}

export default PlayNow