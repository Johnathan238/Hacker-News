import { useSelector, useDispatch } from 'react-redux'
import { addToHistory, lastQuery } from '../actions/actions'

export default function TheHistory () {
    const history = useSelector( state => state.history )

    const dispatch = useDispatch()

    const historyQuery = query => {
        dispatch(lastQuery(query))
    }

    const theHistory = () => {
        return history.map(history =>{
            return (<li> key={history}
                <button onClick={()=>historyQuery(history)} className="App-history">
                    {history}
                </button>
                <button className="History-delete" onClick={()=>dispatch(addToHistory(history))}>x</button>

                <ul>
                    {theHistory()}
                </ul>

            </li>)
        })
    }
}