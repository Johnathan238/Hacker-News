export const NewsReducer = (state = [], action) => {
    switch(action.type) {
        case "NEWS_LIST_LOADING":

        const onlyUrl = [...action.payload.filter(story => story.url)]
        return [...onlyUrl, ...state]

        default:
            return state
    }
}