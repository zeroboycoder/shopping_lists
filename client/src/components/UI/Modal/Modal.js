import React from "react";
import "./Modal.css";

const Modal = (props) => {
   return (
      <div
         style={{
            transform: props.showed ? "translateY(0)" : "translateY(-100vh)",
         }}
         className="Modal"
      >
         <span className="CancelBtn">
            <i className="far fa-window-close" onClick={props.clicked}></i>
         </span>
         {props.children}
      </div>
   );
};

export default Modal;
