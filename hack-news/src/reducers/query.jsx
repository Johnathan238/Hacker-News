export const queryReducer = (state = "", action) => {
    switch(action.type) {
        case "SUBMIT_QUERY":
            return action.payload
        default:
            return state
    }
}