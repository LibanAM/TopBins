import './App.css';
import CoverPage from './containers/CoverPage';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import PlayNow from './containers/PlayNow';
import SignIn from './containers/SignIn';
import Account from './containers/Account';
import Register from './containers/Register';
import Leaderboard from './containers/Leaderboard';
import usePersistedState from './usePersistedState';


function App() {

  const [loggedIn, setLoggedIn] = usePersistedState('loggedIn', false);
  const [currentAcc, setCurrentAcc] = usePersistedState('currentAcc', {});

  return (
    <>
      <Router>
        <Routes>
          <Route path='/playnow' element={<PlayNow currentAcc={currentAcc} setCurrentAcc={setCurrentAcc}/>}></Route>
          <Route path='/' element={<CoverPage />} />
          <Route path='/account' element={<Account />} />
          <Route path='/signIn' element={<SignIn loggedIn={loggedIn} setLoggedIn={setLoggedIn}
            currentAcc={currentAcc} setCurrentAcc={setCurrentAcc} />} />
          <Route path='/register' element={<Register loggedIn={loggedIn} setLoggedIn={setLoggedIn} 
            currentAcc={currentAcc} setCurrentAcc={setCurrentAcc}/>} />
          <Route path='/leaderboard' element={<Leaderboard />} />


        </Routes>
      </Router>
    </>
  );
}

export default App;
