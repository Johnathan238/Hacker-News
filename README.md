# Hacker-News
## Overview

Hacker-News  lets the user search the Hacker News Algolia API and displays a list of results!


<br>

## MVP

- Build an application that lets the user search the Hacker News Algolia API and displays a list of results (https://hn.algolia.com/api)
- Save the user's search terms in the Redux state
- Understand the concept of Redux   

<br>

### Goals

- Understand Redux and querying an API

<br>

### Libraries and Dependencies

|     Library      | 
| :--------------: | 
|      React       | 
|   React Router   | 
|      axios       |
|    react-dom     |
| react-fontawesome|
|    react-icons   |
|    react-redux   |
| react-router-dom |
|    reducers      |
|   redux-thunk    |



<br>



## Code Showcase

 ```
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

  ```

## Resources
https://redux.js.org/tutorials/essentials/part-1-overview-concepts

https://www.youtube.com/watch?v=wZVzeob4ywc&t=334s

https://www.pluralsight.com/guides/how-to-structure-redux-components-and-containers

https://stackoverflow.com/questions/62850430/adding-react-redux-to-a-react-app-with-react-strictmode-tag

https://amplitude.github.io/redux-query/docs/query-configs

https://reactjs.org/docs/hooks-effect.html