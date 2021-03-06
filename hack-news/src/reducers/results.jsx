export const resultsReducer = (state = [], action) => {
    switch(action.type) {
        case "GET_RESULTS":

        const URL = [...action.payload.filter(news => news.url)]
            return [...URL]

        case "CLEAR_RESULTS":
            return []

        default:
            return state
    }
}