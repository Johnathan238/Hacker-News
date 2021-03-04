import {combineReducers} from 'redux';
import { NewsReducer } from './NewsReducer';

const RootReducer = combineReducers({
    News: NewsReducer
});

export default RootReducer