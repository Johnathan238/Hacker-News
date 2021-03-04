export const NewsReducer = (state = [], action) => {
    switch(action.type) {
        case "NEWS_LIST_LOADING":

        let onlyUrl = [...action.payload.filter(news => news.url)]
        return [...onlyUrl, ...state]

        default:
            return state
    }
}