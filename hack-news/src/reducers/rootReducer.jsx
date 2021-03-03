import {combineReducers} from 'redux';
import { topNews } from './topNewsReducer';

const RootReducer = combineReducers({
    topNews : topNewsReducer
});

export default RootReducer