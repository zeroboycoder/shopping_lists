import React from 'react'
import "./Button.css";

const Button = props => {
    return <span className={props.btnClass} onClick={props.clicked}>{props.children}</span>
}

export default Button;