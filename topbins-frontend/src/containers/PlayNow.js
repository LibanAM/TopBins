import { useState, useEffect } from "react";
import Nav from "./Nav";
import './PlayNow.css';
import usePersistedState from "../usePersistedState";
import { useNavigate } from "react-router";
import DarkMode from "./DarkMode";

const PlayNow = ({ loggedIn, currentAcc, setCurrentAcc }) => {

    // const [allPlayers, setAllPlayers] = usePersistedState('allPlayers', []);
    const [allPlayers, setAllPlayers] = useState([]);
    const [foundPlayer, setFoundPlayer] = useState({})
    const [foundNextPlayer, setNextFoundPlayer] = useState({})
    const [gameStarted, setGameStarted] = useState(false);
    const [valueLeft, setValueLeft] = useState("")
    const [valueRight, setValueRight] = useState("")
    const [propertyName, setPropertyName] = useState("")
    const [variableName, setVariableName] = useState("")
    const [score, setScore] = useState(0);
    const [guessed, setGuessed] = useState(false);
    const [lost, setLost] = useState(false);
    const [scoreMsg, setScoreMsg] = useState("");

    const navigate = useNavigate();

    useEffect(() => {
        fetch("http://localhost:8080/players")
            .then((response) => response.json())
            .then((data) => setAllPlayers(data));
    }, []);



    let randomPlayerNumber;
    const fetchRandomPlayer = () => {
        randomPlayerNumber = Math.round(Math.random() * 99)
        let randomPlayer = allPlayers.filter(player => player.id == randomPlayerNumber)
        setFoundPlayer(randomPlayer[0])
        console.log(randomPlayer[0]);

    }

    const randomAttribute = () => {
        const keys = Object.keys(foundPlayer);
        const keysFiltered = keys.filter(key => key.search("id") && key.search("imgLink") && key.search("name")
            && key.search("id") && key.search("team") && key.search("position")
            && key.search("nationality"))
        console.log(keysFiltered);
        const randomNumber = Math.floor(Math.random() * keysFiltered.length);
        const randomKey = keysFiltered[randomNumber];
        console.log(randomKey);
        if (randomKey == "yellowCards") {
            setVariableName("Yellow Cards")
            setPropertyName("yellowCards")

        } else if (randomKey == "leagueGoals") {
            setVariableName("League Goals")
            setPropertyName("leagueGoals")

        } else if (randomKey == "internationalGoals") {
            setVariableName("International Goals")
            setPropertyName("internationalGoals")

        } else if (randomKey == "assists") {
            setVariableName("Assists")
            setPropertyName("assists")

        } else if (randomKey == "redCards") {
            setVariableName("Red Cards")
            setPropertyName("redCards")

        } else if (randomKey == "leagueAppearances") {
            setVariableName("League Appearances")
            setPropertyName("leagueAppearances")
        }
        // console.log(variableName);
        setValueLeft(foundPlayer[randomKey])
        // console.log(valueLeft)
    }

    useEffect(() => {
        randomAttribute()
    }, [foundPlayer])




    const nextPlayer = () => {
        const listOfPlayers = allPlayers.filter(players => players.id != foundPlayer.id)
        // console.log(listOfPlayers.length);
        let nextRandomNumber = Math.round(Math.random() * 98);
        while (nextRandomNumber === randomPlayerNumber) {
            nextRandomNumber = Math.round(Math.random() * 98);
        }
        let nextRandomPlayer = listOfPlayers[nextRandomNumber]
        setNextFoundPlayer(nextRandomPlayer)
        console.log(nextRandomPlayer);

    }

    useEffect(() => {
        nextPlayer()
    }, [foundPlayer])

    const randomAttributeNextPlayer = () => {
        const keysNextPlayer = Object.keys(foundNextPlayer);
        console.log(variableName);
        const keysFilteredNextPlayer = keysNextPlayer.filter(key => key.match(propertyName))
        console.log(keysFilteredNextPlayer)
        const randomNumberNextPlayer = Math.floor(Math.random() * keysFilteredNextPlayer.length);
        const randomKeyNextPlayer = keysFilteredNextPlayer[randomNumberNextPlayer];
        setValueRight(foundNextPlayer[randomKeyNextPlayer])
        console.log(valueRight)
    }

    useEffect(() => {
        randomAttributeNextPlayer()
    }, [propertyName])


    const hasGameStarted = () => {
        setGameStarted(!gameStarted)
    }

    const start = () => {
        hasGameStarted()
        fetchRandomPlayer()
        nextPlayer()
        randomAttribute()
        randomAttributeNextPlayer()

    }

    const higher = () => {
        setGuessed(!guessed)
        let i = score;
        if (valueLeft <= valueRight) {
            i++
            setScore(i);
            setTimeout(() => {
                setFoundPlayer(foundNextPlayer)
                // randomAttribute()
                setGuessed(false)
            }, 1000)
        } else if (valueLeft == valueRight) {
            i++
            setScore(i);
            setTimeout(() => {
                setFoundPlayer(foundNextPlayer)
                // randomAttribute()
                setGuessed(false)
            }, 1000)
        } else {
            endGame()
        }
        console.log("Player chose higher.");
    }

    const lower = () => {
        setGuessed(!guessed)
        let i = score;
        if (valueLeft >= valueRight) {
            i++
            setScore(i);
            setTimeout(() => {
                setFoundPlayer(foundNextPlayer)
                // randomAttribute()
                setGuessed(false)
            }, 1500)
        } else if (valueLeft == valueRight) {
            i++
            setScore(i);
            setTimeout(() => {
                setFoundPlayer(foundNextPlayer)
                // randomAttribute()
                setGuessed(false)
            }, 1500)
        } else {
            endGame()
        }
        console.log("Player chose lower.");
    }

    const endGame = () => {
        setScoreMsg("")
        if (currentAcc.name == undefined) {
            setScoreMsg("You need to login to set a high score")
        } else {
            if (score > currentAcc.score) {
                setScoreMsg("You set a new high score!")
                const newHighScore = {
                    name: currentAcc.name,
                    emailAddress: currentAcc.emailAddress,
                    password: currentAcc.password,
                    score: score,
                    admin: currentAcc.admin,
                    date: currentAcc.date
                }
                fetch(`http://localhost:8080/users/update/${currentAcc.id}`, {
                    method: "PUT",
                    headers: { "Content-type": "application/json" },
                    body: JSON.stringify(newHighScore)
                })
                    .then(response => response.json())
                    .then(updatedUser => setCurrentAcc(updatedUser))
            } else if (score < currentAcc.score) {
                setScoreMsg("You haven't set a new high score")
            } else if (score == currentAcc.score) {
                setScoreMsg("You haven't set a new high score")
            }
        }

        setTimeout(() => { setLost(!lost) }, 1000)
    }

    const restartGame = () => {
        window.location.reload(true)
    }

    return (
        <>
            <div class="firefly"></div>
            <div class="firefly"></div>
            <div class="firefly"></div>
            <div class="firefly"></div>
            <div class="firefly"></div>
            <div class="firefly"></div>
            <div class="firefly"></div>
            <div class="firefly"></div>
            <div class="firefly"></div>
            <div class="firefly"></div>
            <div class="firefly"></div>
            <div class="firefly"></div>
            <div class="firefly"></div>
            <div class="firefly"></div>
            <div class="firefly"></div>

            {/* // html BELOW */}
            {!lost && !gameStarted && <button id="start-btn" onClick={start}>START GAME</button>}
            {!lost && gameStarted && <div className="game-window">
                {!lost && gameStarted && <div className="game-pictures">
                    <img src={foundPlayer.imgLink} alt={foundPlayer.name} />
                    <p className="text-content player-name">{foundPlayer.name}</p>
                    <p className="text-content player-variablename">{variableName}</p>
                    <p className="text-content player-value">{valueLeft}</p>
                </div>}

                {!lost && gameStarted && <div className="game-pictures">
                    {gameStarted && <img src={foundNextPlayer.imgLink} alt={foundNextPlayer.name} />}
                    {gameStarted && <p className="text-content player-name">{foundNextPlayer.name}</p>}
                    {gameStarted && <p className="text-content player-variablename">{variableName}</p>}
                    {guessed && gameStarted && <p className="text-content player-value">{valueRight}</p>}
                    {gameStarted && <button id="btn-higher" onClick={higher}>Higher ???</button>}
                    {gameStarted && <button id="btn-lower" onClick={lower}>Lower ???</button>}
                </div>}
            </div>}

            {!lost && <div className="scoreboard">
                {gameStarted && <p>Current score: {score}</p>}
                {!loggedIn && gameStarted && <p>High-Score: {currentAcc.score}</p>}
            </div>}

            {lost && <div className="end-game">
                <h2>Unlucky, you lost!</h2>
                <p>You got {score} correct before losing.</p>
                <p>{scoreMsg}</p>
                <button onClick={restartGame}>RESTART</button>
            </div>}
            <DarkMode />


        </>
    );
}

export default PlayNow