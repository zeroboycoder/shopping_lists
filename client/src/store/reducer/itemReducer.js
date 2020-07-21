import * as actionTypes from '../action/actionTypes';

const initState = {
    items : [],
    loading : false,
    error : null
}

const reducer = (state=initState, action) => {
    switch(action.type) {
        case(actionTypes.ACTION_START) : return {...state, loading : true}
        case(actionTypes.GET_ITEMS_SUCCESS): return {...state, items : action.datas ,loading: false}
        case(actionTypes.GET_ITEMS_FAIL): return {...state, loading : false}

        case(actionTypes.ADD_ITEM_SUCCESS): return {...state, items: state.items.concat(action.item), loading : false}
        case(actionTypes.ADD_ITEM_FAIL): return {...state, loading: false}

        case(actionTypes.DELETE_ITEM_SUCCESS): return {...state, items: state.items.filter(item => item._id !== action._id)}
        case(actionTypes.DELETE_ITEM_FAIL): return {...state, error : action.err}
        default: return state;
    }
}

export default reducer;