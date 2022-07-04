import './CoverPage.css';
import messiPsg from '../images/messiPsg.jpeg';
import React from 'react';
import { Link } from 'react-router-dom';



const CoverPage = ({loggedIn}) => {


    return (
        <>
         <div id="cover-page">
             <h1>Higher Or Lower: Football Edition</h1>
             <div id="cover-page-inner">
                 <ul>
                     <h2>INSTRUCTIONS</h2>
                     <li>instruction 1</li>
                     <li>instruction 2</li>
                     <li>instruction 3</li>
                     <li>instruction 4</li>
                 </ul>

                 <img src={messiPsg} alt="Messi in a PSG shirt" />

             </div>

             <div className="buttons" id='app'>
                 <Link to='/playnow/'><button className='play-btn'>PLAY NOW!</button></Link>
                 <Link to='/register'><button className='register-btn'>REGISTER</button></Link>
                 <Link to='/account'><button className='signIn-btn'>{loggedIn ? 'ACCOUNT' : 'SIGN IN'}</button></Link >
                <Link to='/leaderboard'><button className='leader-btn'>LEADERBOARD</button></Link >
             </div >

            </div >
        </>
    );
}

export default CoverPage