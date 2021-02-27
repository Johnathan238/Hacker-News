import axios from  'axios';

export const GetHacknewsList = (page) => async dispatch => {
    try {
        dispatch({
            type: "HACKERNEWS_LIST_LOADING"
        })
        const perPage = 15;
        const offset = (page * perPage) - perPage;
        const res = await axios.get(`http://hn.algolia.com/api/v1/search_by_date?tags={offset}`)

        dispatch({
            type: "HACKERNEWS_LIST_SUCCESS",
            payload: res.data
        })
    } catch (e) {
        dispatch({
            type: "HACKERNEWS_LIST_FAILED",
        })
    }
};