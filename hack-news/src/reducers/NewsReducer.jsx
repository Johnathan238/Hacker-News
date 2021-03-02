const DefaultState = {
    loading: false,
    data: [],
    errorMsg: "",
    hits: 'id'
};

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
                data: action.payload.id,
                errorMsg: "",
                hits: action.payload.id
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
};

export default NewsReducer