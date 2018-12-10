import React from "react"
import "./Photos.css"

const Photos = props => (
    <div className="col-md-3 card">
        <img className="card-img-top" src={require(`../../cat/${props.url}`)}  alt="Card cap" ></img>
    </div>


)





export default Photos