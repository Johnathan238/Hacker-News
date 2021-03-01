import axios from  'axios';

export const GetNewsList = () => async dispatch => {
    try {
        dispatch({
            type: "NEWS_LIST_LOADING"
        });
        
        const res = await axios.get(`http://hn.algolia.com/api/v1/search?tags=front_page`)

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

