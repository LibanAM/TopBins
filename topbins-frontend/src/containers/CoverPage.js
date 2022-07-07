import './CoverPage.css';
import pogbaManUtd from '../images/pogbaManUtd.jpeg';
import messiBarca from '../images/messiBarca.jpeg';
import lewandowskiBayern from '../images/lewandowskiBayern.jpeg';
import React from 'react';
import { Link } from 'react-router-dom';
import DarkMode from "./DarkMode";



const CoverPage = ({ loggedIn }) => {


    return (
        <div id="cover-page">
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
            <h1>Higher Or Lower: Football Edition</h1>
            <div id="cover-page-inner">
                <ul>
                    <h2>Can You Guess Correctly?</h2>
                    <h3>A frustratingly addictive game of higher or lower using football player attributes!</h3>
                    <li className="cp-li">Do you like quiz, trivia games and love football? Then this is the game for you!</li>
                    <li className="cp-li">Simply click higher or lower on the player on the right and see if you’re correct, the results may surprise you!</li>
                    <li className="cp-li">Curious to see how many you can get in a row? Get playing and check the leaderboard to see if your score made it on there!</li>
                  

                </ul>
                <div className="slider">
                    <span id="slide-1"></span>
                    <span id="slide-2"></span>
                    <span id="slide-3"></span>
                    <div className="image-container">
                        <img src={pogbaManUtd} className="slide" width="500" height="300" />
                        <img src={messiBarca} className="slide" width="500" height="300" />
                        <img src={lewandowskiBayern} className="slide" width="500" height="300" />
                    </div>
                    <div className="buttons">
                        <a href="#slide-1"></a>
                        <a href="#slide-2"></a>
                        <a href="#slide-3"></a>
                    </div>
                </div>
            </div>
            <br />
            <div className="buttons">
                <Link to='/playnow/'><button className='home-btn'>PLAY NOW!</button></Link>
                <Link to='/register'><button className='home-btn'>REGISTER</button></Link>
                <Link to='/account'><button className='home-btn'>{loggedIn ? 'ACCOUNT' : 'SIGN IN'}</button></Link >
                <Link to='/leaderboard'><button className='home-btn'>LEADERBOARD</button></Link >
            </div >
            <DarkMode />
        </div>
    );
}

export default CoverPage