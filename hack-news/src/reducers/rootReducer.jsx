import {combineReducers} from 'redux';
import { topStoriesReducer } from './NewsReducer';
import { HistoryReducer } from './NewsHistory'

const RootReducer = combineReducers({
    topStories: topStoriesReducer,
    History: HistoryReducer
});

export default RootReducer