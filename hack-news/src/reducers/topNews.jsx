export const topNewsReducer = (state = [], action) => {
    switch(action.type) {
        case "GET_TOP_NEWS":
            // Only show results with urls
            const URL = [...action.payload.filter(news => news.url)]
            return [...URL, ...state]
        default:
            return state
    }
}