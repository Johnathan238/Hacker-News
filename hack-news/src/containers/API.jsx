import axios from 'axios'

const search_API = axios.create({
    baseURL: 'https://hn.algolia.com/api/v1/search?&tags=story&page=1&hitsPerPage=15&query='
})

const stories_API = axios.create({
    baseURL: 'http://hn.algolia.com/api/v1/search?tags=front_page'
})