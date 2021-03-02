import axios from  'axios';

export const GetNewsList = () => async dispatch => {
    try {
        dispatch({
            type: "NEWS_LIST_LOADING"
        });
        
        const perPage = 20;
        const res = await axios.get(`https://hacker-news.firebaseio.com/v0/topstories.json?print=pretty`)

        dispatch({
            type: "NEWS_LIST_SUCCESS",
            payload: res.data
        })
    } catch (e) {
        dispatch({
            type: "NEWS_LIST_FAILED",
        })
    }
};

