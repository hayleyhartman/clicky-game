import React from "react"
import "./Photos.css"

const Photos = props => {
    return (
    <div className="card col-md-3" role="group" >
        <button type="button" className="btn"><img id={props.id} onClick={props.handleClick} className="card-img-top" obj={props.obj} src={require(`../../cat/${props.src}`)} index={props.index} alt="a cat"></img></button>
    </div>
    )
}

export default Photos