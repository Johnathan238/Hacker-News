import {combineReducers} from 'redux';
import { topNewsReducer } from './topNewsReducer';

const RootReducer = combineReducers({
    topNews: topNewsReducer
});

export default RootReducer