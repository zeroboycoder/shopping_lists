import axios from 'axios';
import * as actionTypes from './actionTypes';

const actionStart = () => {
    return {
        type : actionTypes.ACTION_START,
    }
}

// For Get Items
const getItemSuccess = datas => {
    return {
        type : actionTypes.GET_ITEMS_SUCCESS,
        datas : datas
    }
}

const getItemFail = err => {
    return {
        type : actionTypes.GET_ITEMS_FAIL,
        value : err
    }
}

export const onGetItem = () => {
    return dispatch => {
        dispatch(actionStart());
        axios.get("/api/items")
        .then(res => dispatch(getItemSuccess(res.data)))
        .catch(err => dispatch(getItemFail(err)))
    }
}

// For Add Item
const addItemSuccess = item => {
    return {
        type : actionTypes.ADD_ITEM_SUCCESS,
        item : item
    }
}

const addItemFail = err => {
    return {
        type : actionTypes.ADD_ITEM_FAIL,
        err : err
    }
}

export const onAddItem = data => dispatch => {
    axios.post("/api/items/add", data)
    .then(res => dispatch(addItemSuccess(res.data)))
    .catch(err => dispatch(addItemFail(err)))
}

// For Delete Item
const deleteItemSuccess = _id => {
    return {
        type : actionTypes.DELETE_ITEM_SUCCESS,
        _id : _id
    }
}

const deleteItemFail = err => {
    return {
        type : actionTypes.DELETE_ITEM_FAIL,
        value : err
    }
}

export const onDeleteItem = _id => {
    return dispatch => {
        axios.delete("/api/items/delete/"+_id)
        .then(success => dispatch(deleteItemSuccess(_id)))
        .catch(err => dispatch(deleteItemFail(err)))
    }
}