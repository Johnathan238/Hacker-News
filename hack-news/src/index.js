import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {Provider} from 'react-redux';
import  {RootReducer}  from '../src/reducers/RootReducer'
import thunk from 'redux-thunk'
import { createStore, compose, applyMiddleware } from 'redux'

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
const Store = createStore(RootReducer, composeEnhancer(applyMiddleware(thunk))
)

// import {BrowserRouter} from 'react-router-dom'

// import {BrowserRouter} from "react-router-dom";

ReactDOM.render(
  <Provider store={Store}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Provider>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();