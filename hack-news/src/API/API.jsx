import axios from 'axios'

export const SEARCH_API = axios.create({
    baseURL: 'https://hn.algolia.com/api/v1/search?&tags=story&page=1&hitsPerPage=15&query='
})

export const TOP_STORIES_API = axios.create({
    baseURL: 'https://hn.algolia.com/api/v1/search?tags=front_page&hitsPerPage=15'
})