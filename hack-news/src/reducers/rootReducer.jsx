import {combineReducers} from 'redux';
import { NewsReducer } from './NewsReducer';
import { HistoryReducer } from './NewsHistory'

const RootReducer = combineReducers({
    News: NewsReducer,
    History: HistoryReducer
});

export default RootReducer