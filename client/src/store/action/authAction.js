import axios from "axios";
import * as actionTypes from "./actionTypes";
import { returnErrors, clearError } from "./errorAction";
import { reqConfig } from "../../share/reqConfig";

// Check token & load user
export const loadUser = () => (dispatch, getState) => {
   // User loading
   dispatch({ type: actionTypes.USER_LOADING });

   axios
      .get("/api/user", reqConfig(getState))
      .then((res) =>
         dispatch({
            type: actionTypes.USER_LOADED,
            user: res.data,
         })
      )
      .catch((err) => {
         dispatch(returnErrors(err.response.data, err.response.status));
         dispatch({
            type: actionTypes.AUTH_ERROR,
         });
      });
};

// Registration the user
const registrationSuccess = (res) => {
   return {
      type: actionTypes.REGISTER_SUCCESS,
      payload: res.data,
   };
};

const registrationFail = (err) => {
   return {
      type: actionTypes.REGISTER_FAIL,
   };
};

export const registrationUser = (userDatas) => {
   return (dispatch) => {
      axios
         .post("/api/auth/signup", userDatas)
         .then((res) => dispatch(registrationSuccess(res)))
         .catch((err) => {
            dispatch(returnErrors(err.response.data, 400, "REGISTER_FAIL"));
            dispatch(registrationFail(err));
         });
   };
};

// Login the user
const loginSuccess = (res) => {
   return {
      type: actionTypes.LOGIN_SUCCESS,
      payload: res.data,
   };
};

const loginFail = (err) => {
   return {
      type: actionTypes.LOGIN_FAIL,
   };
};

export const loginUser = (userDatas) => {
   return (dispatch) => {
      axios
         .post("/api/auth/signin", userDatas)
         .then((res) => dispatch(loginSuccess(res)))
         .catch((err) => {
            dispatch(returnErrors(err.response.data, 400, "REGISTER_FAIL"));
            dispatch(loginFail(err));
         });
   };
};
