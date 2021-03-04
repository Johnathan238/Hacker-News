export const HistoryReducer = (state = [], action ) => {
    switch(action.type){
        case "ADD_HISTORY_LIST":
            return [action.payload, ...state]
        
            default:
                return state
    }
}