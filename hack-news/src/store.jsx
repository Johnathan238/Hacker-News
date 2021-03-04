import {createStore, compose} from 'redux';
// import {composeWithDevTools} from 'redux-devtools-extension';
import {applyMiddleware} from 'redux';
import thunk from "redux-thunk";
import RootReducer from './reducers/RootReducer';

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
const Store = createStore(RootReducer, composeEnhancer(applyMiddleware(thunk)));

export default Store