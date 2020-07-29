import React, { Component } from "react";
import { connect } from "react-redux";
import UserInput from "../../components/UI/userInput/UserInput";
import Button from "../../components/ShopItem/Button/Button";
import * as action from "../../store/action/authAction";

class Auth extends Component {
   state = {
      userForm: {
         username: {
            elementType: "input",
            elementConfig: {
               type: "text",
               placeholder: "Username",
            },
            validation: {
               isRequired: true,
            },
            value: "",
            isValid: false,
         },
         email: {
            elementType: "input",
            elementConfig: {
               type: "email",
               placeholder: "Email",
            },
            validation: {
               isRequired: true,
               isEmail: true,
            },
            value: "",
            errMsg: "Email isn't valid!",
            isValid: false,
         },
         password: {
            elementType: "input",
            elementConfig: {
               type: "password",
               placeholder: "Password",
            },
            validation: {
               isRequired: true,
               minLength: 6,
            },
            value: "",
            errMsg: "Password must be minimum 6 characters.",
            isValid: false,
         },
         c_password: {
            elementType: "input",
            elementConfig: {
               type: "password",
               placeholder: "Comfirm Password",
            },
            validation: {
               isRequired: true,
               isMatch: true,
            },
            value: "",
            errMsg: "Password doesn't match",
            isValid: false,
         },
      },
      isLogin: false,
   };

   loginToggle = () => {
      this.setState({ isLogin: !this.state.isLogin });
   };

   checkValidation = (value, rules) => {
      let isValid = false;
      isValid = value !== "";

      if (rules.isEmail) {
         const pattern = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
         isValid = pattern.test(value);
      }

      if (rules.minLength) {
         isValid = value.length >= rules.minLength;
      }

      if (rules.isMatch) {
         const pw = this.state.userForm.password.value;
         isValid = pw === value;
      }

      return isValid;
   };

   inputChangeHandler = (event, key) => {
      const value = event.target.value;
      const updateUserForm = this.state.userForm;
      updateUserForm[key].value = value;
      updateUserForm[key].istouch = true;
      updateUserForm[key].isValid = this.checkValidation(
         updateUserForm[key].value,
         updateUserForm[key].validation
      );
      this.setState({ userForm: updateUserForm });
   };

   canClicked = () => {
      let canClicked = true;
      for (let key in this.state.userForm) {
         canClicked = this.state.userForm[key].isValid && canClicked;
      }
      return canClicked;
   };

   submitHandler = () => {
      const username = this.state.userForm.username.value;
      const email = this.state.userForm.email.value;
      const password = this.state.userForm.password.value;
      const userDatas = { username, email, password };
      this.props.registration(userDatas);
   };

   render() {
      let inputForm = [];
      for (let key in this.state.userForm) {
         inputForm.push(
            <UserInput
               key={key}
               elementtype={this.state.userForm[key].elementType}
               elementconfig={this.state.userForm[key].elementConfig}
               value={this.state.userForm[key].value}
               errmsg={this.state.userForm[key].errMsg}
               touched={this.state.userForm[key].istouch}
               valided={this.state.userForm[key].isValid}
               changed={(event) => this.inputChangeHandler(event, key)}
            />
         );
      }
      return (
         <div className="container">
            <div className="Auth">
               <h1>{this.state.isLogin ? "Login" : "Registration"}</h1>
               {inputForm}
               <Button
                  btnClass="Button"
                  showed={this.canClicked()}
                  clicked={this.submitHandler}
               >
                  {this.state.isLogin ? "Login" : "Register"}
               </Button>
               <br /> <br />
               <Button
                  btnClass="Button"
                  clicked={this.loginToggle}
                  showed={true}
               >
                  Go To {this.state.isLogin ? "Register" : "Login"}
               </Button>
            </div>
         </div>
      );
   }
}

const dispatchToProps = (dispatch) => {
   return {
      registration: (userDatas) => dispatch(action.registrationUser(userDatas)),
   };
};

export default connect(null, dispatchToProps)(Auth);
