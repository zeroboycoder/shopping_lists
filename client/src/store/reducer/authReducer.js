import * as actionTypes from "../action/actionTypes";

const initState = {
  token: localStorage.getItem("token"),
  userLoading: false,
  isAuthenticated: false,
  user: null,
};

const reducer = (state = initState, action) => {
  switch (action.type) {
    case actionTypes.USER_LOADING:
      return {
        ...state,
        userLoading: true,
      };
    case actionTypes.USER_LOADED:
      return {
        ...state,
        userLoading: false,
        isAuthenticated: true,
        user: action.user,
      };
    case actionTypes.LOGIN_SUCCESS:
    case actionTypes.REGISTER_SUCCESS:
      localStorage.setItem("token", action.payload.token);
      return {
        ...state,
        ...action.payload,
        isAuthenticated: true,
        userLoading: false,
      };
    case actionTypes.LOGIN_FAIL:
    case actionTypes.REGISTER_FAIL:
    case actionTypes.LOGOUT_SUCCESS:
    case actionTypes.AUTH_ERROR:
      localStorage.removeItem("token");
      return {
        ...state,
        token: null,
        isAuthenticated: false,
        userLoading: false,
        user: null,
      };
    default:
      return state;
  }
};

export default reducer;
