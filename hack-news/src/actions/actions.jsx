import { TOP_NEWS_API, SEARCH_API } from '../API/API'


export const topNewsQuery = () => async dispatch => {
  const response = await TOP_NEWS_API.get('')

  dispatch( {
    type: 'GET_TOP_NEWS', 
    payload: response.data.hits 
  } )
}


export const submitQuery = query => async dispatch => {
  const response = await SEARCH_API.get(`${query}`)
  
  dispatch( {
    type: "GET_RESULTS", 
    payload: response.data.hits 
  } )

  dispatch( {
    type: "CLEAR_ENTRY", 
    payload: query 
  } )
}


// export const lastQuery = query => {
//   return {
//     type: "SAVE_LAST_QUERY",
//     payload: query
//   }
// }

export const addToHistory = query => {
  return {
      type: "ADD_TO_HISTORY",
      payload: query
  }
}


export const clearHistory = () => {
  return {
    type: "CLEAR_HISTORY"
  }
}

export const clearResults = () => {
    return {
      type: 'CLEAR_RESULTS'
    }
}




// export const clearQuery = query => {
//   return {
//     type: "CLEAR_QUERY",
//     payload: query
//   }
// }