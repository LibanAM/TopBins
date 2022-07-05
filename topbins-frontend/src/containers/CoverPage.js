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
            <h1>Higher Or Lower: Football Edition</h1>
            <div id="cover-page-inner">
                <ul>
                    <h2>HOW TO PLAY</h2>
                    <li>Sign into your <Link to="/account">Account</Link> or create one <Link to="/register">now!</Link></li>
                    <li>instruction 2</li>
                    <li>instruction 3</li>
                    <li>instruction 4</li>
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