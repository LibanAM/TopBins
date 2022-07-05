import './App.css';
import CoverPage from './containers/CoverPage';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import PlayNow from './containers/PlayNow';
import SignIn from './containers/SignIn';
import Account from './containers/Account';
import Register from './containers/Register';
import Leaderboard from './containers/Leaderboard';
import usePersistedState from './usePersistedState';
import Nav from './containers/Nav';
import Footer from './containers/Footer';





function App() {

  const [loggedIn, setLoggedIn] = usePersistedState('loggedIn', false);
  const [currentAcc, setCurrentAcc] = usePersistedState('currentAcc', {});

  return (
    <>
      <Router>
        <Nav loggedIn={loggedIn} currentAcc={currentAcc} setLoggedIn={setLoggedIn} setCurrentAcc={setCurrentAcc}/>
        <Routes>
          <Route path='/playnow' element={<PlayNow currentAcc={currentAcc} setCurrentAcc={setCurrentAcc} />}></Route>

          <Route path='/' element={<CoverPage loggedIn={loggedIn} />} />

          <Route path='/account' element={loggedIn ? <Account currentAcc={currentAcc} setCurrentAcc={setCurrentAcc}
            loggedIn={loggedIn} setLoggedIn={setLoggedIn} /> : <SignIn loggedIn={loggedIn} setLoggedIn={setLoggedIn}
            currentAcc={currentAcc} setCurrentAcc={setCurrentAcc} />} />

          {/* <Route path='/signIn' element={<SignIn loggedIn={loggedIn} setLoggedIn={setLoggedIn}
            currentAcc={currentAcc} setCurrentAcc={setCurrentAcc} />} /> */}

          <Route path='/register' element={<Register loggedIn={loggedIn} setLoggedIn={setLoggedIn}
            currentAcc={currentAcc} setCurrentAcc={setCurrentAcc} />} />

          <Route path='/leaderboard' element={<Leaderboard />} />



        </Routes>
        <Footer/>
      </Router>
    </>
  );
}

export default App;
