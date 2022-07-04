import { useState, useEffect } from "react";
import './Leaderboard.css';

const Leaderboard = () => {

  const [leaderboards, setLeaderboards] = useState([]);

  useEffect(() => {
    fetch("http://localhost:8080/users")
      .then(response => response.json())
      .then(data => setLeaderboards(data))
  }, []);


  return (
    <div className="table-container">
      <h1>Leaderboard</h1>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Score</th>
            <th>Date</th>
          </tr>
        </thead>
        <tbody>
          {leaderboards.map((leaderboard) => ( 
            <tr>    
            <td>{leaderboard.name}</td>
            <td>{leaderboard.score}</td>
            <td></td>
            </tr>       
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Leaderboard