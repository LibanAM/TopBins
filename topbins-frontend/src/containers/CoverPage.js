import './CoverPage.css';
import messiPsg from '../images/messiPsg.jpeg';
import React from 'react';
import { Link } from 'react-router-dom';
import DarkMode from "./DarkMode";



const CoverPage = ({loggedIn}) => {


    return (
        <>
         <div id="cover-page">
             <h1>Higher Or Lower: Football Edition</h1>
             <div id="cover-page-inner">
                 <ul>
                     <h2>HOW TO PLAY</h2>
                     <li>Sign into your <Link to="/account">Account</Link> or create one <Link to="/register">now!</Link></li>
                     <li>instruction 2</li>
                     <li>instruction 3</li>
                     <li>instruction 4</li>
                 </ul>

                 <img src={messiPsg} alt="Messi in a PSG shirt" />

             </div>
             <br/>
             <div className="buttons">
                 <Link to='/playnow/'><button className='home-btn'>PLAY NOW!</button></Link>
                 <Link to='/register'><button className='home-btn'>REGISTER</button></Link>
                 <Link to='/account'><button className='home-btn'>{loggedIn ? 'ACCOUNT' : 'SIGN IN'}</button></Link >
                <Link to='/leaderboard'><button className='home-btn'>LEADERBOARD</button></Link >
             </div >
            <DarkMode />
            </div >
        </>
    );
}

export default CoverPage