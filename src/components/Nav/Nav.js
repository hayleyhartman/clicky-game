import React from "react"
import "./nav.css"


const Nav = props => (
    <ul className="nav justify-content-center">
        <li className="nav-item">
            <p className="nav-link title">Clicky Game</p>
        </li>
        <li className="nav-item">
            <p className="nav-link">{props.correct}</p>
        </li>
        <li className="nav-item ">
            <p className="nav-link score">Score:  {props.score} | Top score: {props.topScore}</p>
        </li>
    </ul>
)

export default Nav

