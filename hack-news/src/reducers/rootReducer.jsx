import {combineReducers} from 'redux';
import { topNewsReducer } from './topNews'

const RootReducer = combineReducers({
    topNews: topNewsReducer,
});

export default RootReducer;