import { useEffect } from 'react'
import { useDispatch, useSelector} from 'react-redux'
import { GetNewsList } from "../actions/NewsActions"

export default function TopNews () {
    const news = useSelector( state => state.topNews )

    const results = useSelector (state => state.results)

    const dispatch = useDispatch()
    
    useEffect(() => {
        dispatch(GetNewsList(news))
    }, [])

    const theNews = () => {
        return news.map(news =>{
            return (<li key={news.objectID}>

                <a href={news.url}> {news.title} </a>
                <a>{results}</a>

            </li>)
        })
    }


    return (
        <div>
            {/* {!news.length && <p>Waiting on Hacker News API...</p>}
            {fetch(results) &&  */}
                <div>
                    <h3>Today's New's is</h3>
                    <ul>{theNews}</ul>
                </div>

        </div>
    )
}






