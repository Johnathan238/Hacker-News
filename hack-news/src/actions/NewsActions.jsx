import axios from  'axios';
import { stories_API, search_API } from '../containers/API'




export const GetNewsList = () => async dispatch => {

    const res = await stories_API.get('')
        
    dispatch({
        type: "NEWS_LIST_LOADING",
        payload: res.data.hits
    });

};

export const SearchNewsList = () => async dispatch => {
    const res = await search_API.get(`${query}`)
        
    dispatch({
        type: "GOT_NEWS",
        payload: res.data.hits
        });

    dispatch({
        type: "CLEAR_NEWS",
        payload: query
    });

};

//history
export const addToHistory = query => {
    return {
        type: "ADD_TO_HISTORY",
        payload: query
    }
};



    // try {
    //     dispatch({
    //         type: "LIST_LOADING"
    //     });
        
    //     const perPage = 20;
    //     const res = await axios.get(`https://hacker-news.firebaseio.com/v0/topstories.json?print=pretty`)

    //     dispatch({
    //         type: "NEWS_LIST_SUCCESS",
    //         payload: res.data
    //     })
    // } catch (e) {
    //     dispatch({
    //         type: "NEWS_LIST_FAILED",
    //     })
    // }


