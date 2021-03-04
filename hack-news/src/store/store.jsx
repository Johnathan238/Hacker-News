import  RootReducer  from "../reducers/RootReducer"
import thunk from 'redux-thunk'
import { createStore, compose, applyMiddleware } from 'redux'

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
const Store = createStore(RootReducer, composeEnhancer(applyMiddleware(thunk))
)

export default Store