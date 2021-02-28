const DefaultState = {
    loading: false,
    data: [],
    errorMsg: ""
}

const NewsReducer = (state = DefaultState, action) => {
    switch (action.type) {
        case "NEWS_LIST_LOADING":
            return {
                ...state,
                loading: true,
                errorMsg: ""
            }

        case "NEWS_LIST_SUCCESS":
            return {
                ...state,
                loading: false,
                data: action.payload,
                errorMsg: ""
            }

        case "NEWS_LIST_FAILED":
            return {
                ...state,
                loading: false,
                errorMsg: "Sorry but I can't seem to find the News!"
            }
        default:
            return state
    }
}

export default NewsReducer