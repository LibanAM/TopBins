import { useState, useEffect } from "react";
import Nav from "./Nav";
import './PlayNow.css';
import usePersistedState from "../usePersistedState";
import { useNavigate } from "react-router";
import DarkMode from "./DarkMode";

const PlayNow = ({ loggedIn, currentAcc, setCurrentAcc }) => {

    // const [allPlayers, setAllPlayers] = usePersistedState('allPlayers', []);
    const [allPlayers, setAllPlayers] = useState([]);
    let [foundPlayer, setFoundPlayer] = useState([])
    let [foundNextPlayer, setNextFoundPlayer] = useState([])
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
        console.log(randomPlayer[0]);
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
    }, [foundPlayer], [variableName])




    const nextPlayer = () => {
        let nextRandomNumber = Math.round(Math.random() * 99);
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
        console.log(variableName);
        const keysFiltered = keys.filter(key => key.match(propertyName))
        console.log(keysFiltered)
        const randomNumber = Math.floor(Math.random() * keysFiltered.length);
        const randomKey = keysFiltered[randomNumber];
        setValueRight(foundNextPlayer[randomKey])
        console.log(valueRight)
    }

    useEffect(() => {
        randomAttributeNextPlayer()
    }, [variableName])


    const hasGameStarted = () => {
        setGameStarted(!gameStarted)
    }
    const start = () => {
        hasGameStarted()
        fetchRandomPlayer()
        nextPlayer()
        randomAttribute()
        randomAttributeNextPlayer()

        // console.log(currentAcc);
    }

    const higher = () => {
        setGuessed(!guessed)
        let i = score;
        if (valueLeft <= valueRight) {
            i++
            setScore(i);
            setTimeout(() => {
                setFoundPlayer(foundNextPlayer)
                nextPlayer()
                randomAttribute()
                randomAttributeNextPlayer()
                setGuessed(false)
            }, 1000)
        } else if (valueLeft == valueRight) {
            i++
            setScore(i);
            setTimeout(() => {
                setFoundPlayer(foundNextPlayer)
                nextPlayer()
                randomAttribute()
                randomAttributeNextPlayer()
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
                nextPlayer()
                randomAttribute()
                randomAttributeNextPlayer()
                setGuessed(false)
            }, 1000)
        } else if (valueLeft == valueRight) {
            i++
            setScore(i);
            setTimeout(() => {
                setFoundPlayer(foundNextPlayer)
                nextPlayer()
                randomAttribute()
                randomAttributeNextPlayer()
                setGuessed(false)
            }, 1000)
        } else {
            endGame()
        }
        console.log("Player chose lower.");
    }

    const endGame = () => {
        if (loggedIn = true) {
            if (score > currentAcc.score) {
                setScoreMsg("You set a new high score!")
                const newHighScore = {
                    name: currentAcc.name,
                    emailAddress: currentAcc.emailAddress,
                    password: currentAcc.password,
                    score: score,
                    admin: currentAcc.admin
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
            }
        }
        // navigate('/playnow/endgame')
        setTimeout(() => {setLost(!lost)}, 1000)
    }

    const restartGame = () => {
        window.location.reload(true)
    }

    return (
        <>
            {!lost && !gameStarted && <button onClick={start}>START GAME</button>}
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
                {guessed && gameStarted && <p  className="text-content player-value">{valueRight}</p>}
                {gameStarted && <button id="btn-higher" onClick={higher}>Higher</button>}
                {gameStarted && <button id="btn-lower" onClick={lower}>Lower</button>}
            </div>}

            </div>}

            {!lost && <div>
                {gameStarted && <p>Current score: {score}</p>}
                {currentAcc !== [] && gameStarted && <p>High-Score: {currentAcc.score}</p>}
            </div>}

            {lost && <div>
                <h2>Unlucky, You lost!</h2>
                <p>You got {score} correct before losing.</p>
                <p>{scoreMsg}</p>
                <button onClick={restartGame}>RESTART</button>
            </div>}
            <DarkMode />


        </>
    );
}

export default PlayNow