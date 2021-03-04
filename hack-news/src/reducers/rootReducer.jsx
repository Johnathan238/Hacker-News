import {combineReducers} from 'redux';
import { topNewsReducer } from './topNews'

export const RootReducer = combineReducers({
    topNews: topNewsReducer,
});

