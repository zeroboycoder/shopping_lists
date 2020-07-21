import React from 'react';
import ReactDOM from "react-dom";
import App from './App';
import {BrowserRouter} from 'react-router-dom';
import {createStore, applyMiddleware, compose} from 'redux';
import {Provider} from 'react-redux';
import thunk from 'redux-thunk';
import reducer from './store/reducer/itemReducer';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducer,composeEnhancers(
    applyMiddleware(thunk)
))

ReactDOM.render(<Provider store={store}>
    <BrowserRouter>
        <App />
    </BrowserRouter>
</Provider>,document.querySelector("#root"))