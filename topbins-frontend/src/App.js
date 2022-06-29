import './App.css';
import CoverPage from './containers/CoverPage';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import PlayNow from './containers/PlayNow';
import SignIn from './containers/SignIn';
import Account from './containers/Account';
import Register from './containers/Register';
import Leaderboard from './containers/Leaderboard';



function App() {
  return (
    <>
    <Router>
      <Routes>
        <Route path='/playnow' element={<PlayNow />}></Route>
        <Route path='/' element={<CoverPage />} />
        <Route path='/signIn' element={<SignIn />} />
        <Route path='/account' element={<Account />} />
        <Route path='/register' element={<Register />} />
        <Route path='/leaderboard' element={<Leaderboard />} />


      </Routes>
      </Router>
    </>
  );
}

export default App;
