import {combineReducers} from 'redux';
import NewsReducer from './NewsReducer';

const RootReducer = combineReducers({
    NewsList : NewsReducer
});

export default RootReducer