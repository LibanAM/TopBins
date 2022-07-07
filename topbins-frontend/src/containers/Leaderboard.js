import { useState, useEffect } from "react";
import './Leaderboard.css';
import DarkMode from "./DarkMode";

const Leaderboard = () => {

  const [leaderboards, setLeaderboards] = useState([]);

  useEffect(() => {
    fetch("http://localhost:8080/users")
      .then(response => response.json())
      .then(data => setLeaderboards(data))
  }, []);


  return (
    <div className="table-container">
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
      <h1 className="leaderboard-title">Leaderboard</h1>
      <table className="table">
        <thead>
          <tr>
            <th>NAME</th>
            <th>HIGH-SCORE</th>
            <th>DATE</th>
          </tr>
        </thead>
        <tbody>
          {leaderboards
          .sort((a,b) => a.score > b.score ? -1 : 1 )
          .map((leaderboard) => (
            <tr key={leaderboard.id}>
              <td>{leaderboard.name}</td>
              <td>{leaderboard.score}</td>
              <td>{leaderboard.score != 0 ? leaderboard.date : null}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <DarkMode />
    </div>
  );
}

export default Leaderboard