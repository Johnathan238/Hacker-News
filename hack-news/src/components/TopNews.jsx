import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { topNewsQuery } from '../actions/actions'

export default function TopNews() {
    const news = useSelector( state => state.topNews )
    const results = useSelector( state => state.results )
    const dispatch = useDispatch()
    
    
    useEffect(() => {
        dispatch(topNewsQuery(news))
    },[])


    const renderTopNews = () => {
        return news.map(news => {
            return (
            <li key={news.objectID} className="news-list">
                <a  href={news.url} target="_blank">{news.title}</a>
            </li>)
        })
    }

    
    return (
        <div>
            {!news.length && 
            <p>Waiting on Hacker News API...</p>}
            {!results[0] && 

                <div>
                    <h3>Today's News</h3>
                    <ul>{news && renderTopNews()}</ul>
                </div>

            }
        </div>
    )
}