import React from "react";
import "./UserInput.css";

const UserInput = (props) => {
   let input;
   let classes = ["InputControl"];
   let showErrMsg = false;
   if (!props.valided && props.touched) {
      classes.push("InputDanger");
      showErrMsg = true;
   }
   if (props.elementtype === "input") {
      input = (
         <div>
            <input
               {...props.elementconfig}
               value={props.value}
               className={classes.join(" ")}
               onChange={props.changed}
            />
            {showErrMsg ? <p>{props.errmsg}</p> : null}
         </div>
      );
   }
   return <div className="mb-3 Input">{input}</div>;
};

export default UserInput;
