import React from 'react';
import { Link } from "react-router-dom";
import './Start.css';
import mushroom from '../img/startMushroom.png';
import start from '../img/startBT.png';
import title from '../img/gameTitle.png'
import cloud1 from '../img/leftCloud1.png';
import cloud2 from '../img/leftCloud2.png';
import cloud3 from '../img/leftCloud3.png';
import cloud4 from '../img/rightCloud1.png';
import cloud5 from '../img/rightCloud2.png';
import cloud6 from '../img/rightCloud3.png';
import grass1 from '../img/grass1.png'
import grass2 from '../img/grass2.png'
import grass3 from '../img/grass3.png'
import grass4 from '../img/grass4.png'
import grass5 from '../img/grass5.png'

export default function Start() {
    return (
        <div>
            <div className="startBackground">
                <img src={title} className="gameTitle" alt="gameTitle"></img>
                <Link to="/" className="logo">
                </Link>
                <img src={mushroom} className="startMushroom" alt="mushroom"></img>
                <Link to="/play" >
                    <img src={start} className="startBT" alt="start"></img>
                </Link>
                <img src={cloud1} id="cloud" className="cloud1" alt="cloud1"></img>
                <img src={cloud2} id="cloud" className="cloud2" alt="cloud2"></img>
                <img src={cloud3} id="cloud" className="cloud3" alt="cloud3"></img>
                <img src={cloud4} id="cloud" className="cloud4" alt="cloud4"></img>
                <img src={cloud5} id="cloud" className="cloud5" alt="cloud5"></img>
                <img src={cloud6} className="cloud6" alt="cloud6"></img>
                <img src={grass1} id="grass" className="grass1" alt="grass1"></img>
                <img src={grass2} id="grass" className="grass2" alt="grass2"></img>
                <img src={grass3} id="grass" className="grass3" alt="grass3"></img>
                <img src={grass4} id="grass" className="grass4" alt="grass4"></img>
                <img src={grass5} id="grass" className="grass5" alt="grass5"></img>
            </div>

        </div>
    )
}

