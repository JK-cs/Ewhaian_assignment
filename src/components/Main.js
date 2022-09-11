import { Link } from "react-router-dom";
import React, { useEffect, useState } from "react";
import rectangle from '../img/rectangle.png';
import gauge from '../img/gauge.png';
import login from '../img/login.png';
import box from "../img/box.png";
import game from "../img/game.png";
import intro from '../img/intro.png';
import hamburger from "../img/hamburger.png";
import Nav from "./Nav";
import './Main.css';

function Main() {

    const [clickNav, setClickNav] = useState(false);

    const onClick = () => {
        if (clickNav === false)
            setClickNav(true);
        else
            setClickNav(false);
    };

    return (
        <div className="Main">
            <div className="nav-container">
                {clickNav ? (
                    <Nav />
                ) : console.log()}
            </div>
            <div className="background">
                <div className="header">
                    <button type="button" className="hamburger" onClick={onClick}>
                    </button>
                    <Link to="/login" className="login" id="login">
                        <img src={login} alt="login" />
                    </Link>
                    <Link to="/" className="logo" id="home">
                    </Link>
                </div>
                <div className="middleBox">
                    <img src={rectangle} className="rectangle" alt="rectangle" />
                    <img src={gauge} className="gauge" alt="gauge" />
                </div>

                <div className="gameIntro">
                    <div>
                        <img src={game} className="game" alt="game"></img>
                    </div>
                    <div className="introBox">
                        <div className="smallBox">
                            <div>
                                <img src={box} className="box" alt="box"></img>
                            </div>
                            <div>
                                <img src={intro} className="intro" alt="intro"></img>
                            </div>
                        </div>
                        <div className="smallBox">
                            <div>
                                <img src={box} className="box" alt="box"></img>
                            </div>
                            <div>
                                <img src={intro} className="intro" alt="intro"></img>
                            </div>
                        </div>
                        <div className="smallBox">
                            <div>
                                <img src={box} className="box" alt="box"></img>
                            </div>
                            <div>
                                <img src={intro} className="intro" alt="intro"></img>
                            </div>
                        </div>

                    </div>

                </div>
            </div>
        </div>

    );
}

export default Main;
