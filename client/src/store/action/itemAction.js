import axios from "axios";
import * as actionTypes from "./actionTypes";
import { reqConfig } from "../../share/reqConfig";

const actionStart = () => {
   return {
      type: actionTypes.ACTION_START,
   };
};

// For Get Items
const getItemSuccess = (datas) => {
   return {
      type: actionTypes.GET_ITEMS_SUCCESS,
      datas: datas,
   };
};

const getItemFail = (err) => {
   return {
      type: actionTypes.GET_ITEMS_FAIL,
      value: err,
   };
};

export const onGetItem = () => {
   return (dispatch, getState) => {
      dispatch(actionStart());
      axios
         .get("/api/items", reqConfig(getState))
         .then((res) => dispatch(getItemSuccess(res.data)))
         .catch((err) => dispatch(getItemFail(err)));
   };
};

// For Add Item
const addItemSuccess = (item) => {
   return {
      type: actionTypes.ADD_ITEM_SUCCESS,
      item: item,
   };
};

const addItemFail = (err) => {
   return {
      type: actionTypes.ADD_ITEM_FAIL,
      err: err,
   };
};

export const onAddItem = (data) => (dispatch, getState) => {
   axios
      .post("/api/items/add", data, reqConfig(getState))
      .then((res) => dispatch(addItemSuccess(res.data)))
      .catch((err) => dispatch(addItemFail(err)));
};

// For Delete Item
const deleteItemSuccess = (_id) => {
   return {
      type: actionTypes.DELETE_ITEM_SUCCESS,
      _id: _id,
   };
};

const deleteItemFail = (err) => {
   return {
      type: actionTypes.DELETE_ITEM_FAIL,
      value: err,
   };
};

export const onDeleteItem = (_id) => {
   return (dispatch, getState) => {
      axios
         .delete("/api/items/delete/" + _id, reqConfig(getState))
         .then((success) => dispatch(deleteItemSuccess(_id)))
         .catch((err) => dispatch(deleteItemFail(err)));
   };
};
