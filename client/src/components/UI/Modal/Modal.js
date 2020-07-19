import React from 'react'
import './Modal.css'

const Modal = props => {
    return <div 
        style={{ transform : props.showed ? 
        "translateY(0)" : "translateY(-100vh)"}}
        className="Modal">
            {props.children}
    </div>
}

export default Modal;