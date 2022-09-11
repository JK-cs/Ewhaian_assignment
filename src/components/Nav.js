import { Link } from "react-router-dom";
import React from 'react'
import home from "../img/homeBT.png";
import game1 from "../img/homeBT.png";
import game2 from "../img/homeBT.png";
import game3 from "../img/homeBT.png";

export default function Nav() {
    return (
        <div className="nav">
            <Link to="/" className="homeBT" id="home">
                <img src={home} alt="home" />
            </Link>
            <Link to="/game1" className="gameBT" id="game1">
                <img src={game1} alt="game1" />
            </Link>
            <Link to="/game2" className="gameBT" id="game2">
                <img src={game2} alt="game2" />
            </Link>
            <Link to="/game3" className="gameBT" id="game3">
                <img src={game3} alt="game3" />
            </Link>
        </div>
    )
}
