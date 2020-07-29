import * as actionTypes from "../action/actionTypes";

const initState = {
  msg: {},
  status: null,
  id: null,
};

const reducer = (state = initState, action) => {
  switch (action.type) {
    case actionTypes.GET_ERROR:
      return {
        ...state,
        msg: action.payload.msg,
        status: action.payload.status,
        id: action.payload.id,
      };
    case actionTypes.CLEAR_ERROR:
      return {
        ...state,
        msg: {},
        status: null,
        id: null,
      };
    default:
      return state;
  }
};

export default reducer;
