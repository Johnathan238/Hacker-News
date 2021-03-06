import { useSelector, useDispatch } from 'react-redux'
import { clearHistory, submitQuery } from '../actions/actions'

export default function History () {
    const history = useSelector(state => state.history)
    const dispatch = useDispatch()


    const handleQuery = query => {
        dispatch(submitQuery(query))
    }


    const renderHistory = () => {
        return history.map(history => {
            return (<li key={history} className="history-list">

                <button onClick={()=>handleQuery(history)} className="history">
                    {history}
                </button>

            </li>
            )
        })
    }


    return (
        <div>
            {!history.length && <div><p className="No-History">(No recent history)</p></div>}
            {!!history.length &&

                <div>
                    <h3 className="Search-History">Search History ({history.length})</h3>
                    <ul>
                        {renderHistory()}
                    </ul>
                    <button className= "Clear-History" onClick={()=>dispatch(clearHistory())}>
                        Clear History
                    </button>
                </div>

            }
        </div>
    )
}