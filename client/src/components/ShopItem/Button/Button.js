import React from 'react'
import "./Button.css";

const Button = props => {
    return <button className={props.btnClass} onClick={props.clicked} disabled={!props.showed}>{props.children}</button>
}

export default Button;