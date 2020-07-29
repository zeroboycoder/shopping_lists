import * as actionTypes from "./actionTypes";

// Return error
export const returnErrors = (msg, status, id = null) => {
  return {
    type: actionTypes.GET_ERROR,
    payload: { msg, status, id },
  };
};

// Clear error
export const clearError = () => {
  return {
    type: actionTypes.CLEAR_ERROR,
  };
};
