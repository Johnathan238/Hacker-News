import { useDispatch, useSelector } from 'react-redux'
import { clearResults } from '../actions/actions'

export default function Results () {
    const results = useSelector(state => state.results)
    const dispatch = useDispatch()


    const renderResults = () => {
        return results.map(results => {
            return (
            <li key={parseInt(results.objectID)} className="results">

                <a href={results.url} target="_blank">{results.title}</a>

            </li>) 
        })
    }


    return (
        <div>
            {!!results.length &&  
                <div>

                    <button 
                        className="Back-News"
                        onClick={()=>dispatch(clearResults(results))}
                    >
                        Back to the News
                    </button>

                    <ul>{renderResults()}</ul>
                </div>
            } 
        </div>
    )
}