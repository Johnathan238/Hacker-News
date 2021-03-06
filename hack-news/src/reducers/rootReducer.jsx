import { topNewsReducer } from './topNews'
import { resultsReducer } from './results'
import { historyReducer } from './history'
import { queryReducer } from './query'
import { combineReducers } from 'redux'

export const rootReducer = combineReducers({
    topNews : topNewsReducer,
    results : resultsReducer,
    history : historyReducer,
    query : queryReducer
})