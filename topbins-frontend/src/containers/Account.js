import UserList from "../components/UserList"
import { useState, useEffect } from "react";


const Account = () => {

  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch("http://localhost:8080/users")
      .then((response) => response.json())
      .then((data) => setUsers(data));
  }, []);

  return (
    <div>
      <h1>My Account</h1>
      <div className="account-container">
        <UserList users={users}/>
      </div>
    </div>
  )
}

export default Account