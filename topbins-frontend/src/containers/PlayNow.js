import { useState, useEffect } from "react";
import Nav from "./Nav";




const PlayNow = () => {

    const [allPlayers, setAllPlayers] = useState([]);

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

    const [foundPlayer, setFoundPlayer] = useState([])
    // const [playerImage, setPlayerImage] = useState("")

    const fetchRandomPlayer = () => {
        let randomNumber = Math.floor(Math.random() * 100)
        let randomPlayer = allPlayers[randomNumber]
        setFoundPlayer(randomPlayer)
        // setPlayerImage(randomPlayer.imgLink)
        // console.log(playerImage);
    }

    let attributeName = "";
    const [attribute, setAttribute] = useState("")

    const randomAttribute = () => {
        let randomNumber = Math.round(Math.random() * 3)
        if (randomNumber == 0) {
            attributeName = "league goals";
            setAttribute(foundPlayer.leagueGoals)
        } else if (randomNumber == 1) {
            attributeName = "league goals";
            setAttribute(foundPlayer.internationalGoals)
        } else if (randomNumber == 2) {
            attributeName = "league goals";
            setAttribute(foundPlayer.leagueAppearances)
        } else if (randomNumber == 3) {
            attributeName = "league goals";
            setAttribute(foundPlayer.assists)
        }
    }



    const click = () => {
        fetchRandomPlayer()
        randomAttribute()
        console.log(attribute);
    }

    // useEffect(() => {
    //     fetchRandomPlayer();
    // }, [])


    return (
        <>
            <Nav />
            <button onClick={click}>CLICK</button>
            <div>
                <img src={foundPlayer.imgLink} alt={foundPlayer.name} />
                <p>{foundPlayer.name}</p>
                <p>League Goals</p>
                <p>{attribute}</p>
            </div>

            <div>
                {/* <img src alt /> */}
                <p>{foundPlayer.name}</p>
                <p>League Goals</p>
                <button>higher</button>
                <button>lower</button>
            </div>
        </>
    );
}

export default PlayNow