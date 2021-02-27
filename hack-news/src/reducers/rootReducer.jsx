import {combineReducers} from 'redux'
import HackerNewsReducer from './HackerNewsReducer'

const RootReducer = combineReducers({
    HacknewsList : HackerNewsReducer
});

export default RootReducer