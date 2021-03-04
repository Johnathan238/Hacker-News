import { useEffect } from 'react'
import { useDispatch, useSelector} from 'react-redux'
import { GetNewsList } from "../actions/NewsActions"

export default function TopNews () {
    const news = useSelector( state => state.topNews )

    const results = useSelector (state => state.results)

    const dispatch = useDispatch()
    
    useEffect(() => {
        dispatch(GetNewsList(news))
    },[])

    const theTopNews = () => {
        return news.map(news =>{
            return (<li> key={news.objectID}

                <a href={news.url}> {news.title} </a>

            </li>)
        })
    }
}




