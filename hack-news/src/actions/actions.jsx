import { TOP_NEWS_API } from '../API/API'

export const topNewsQuery = () => async dispatch => {
    const response = await TOP_NEWS_API.get('')
    dispatch( 
        {
            
        type: 'GET_TOP_STORIES', 
        payload: response.data.hits 

    } )
}



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


