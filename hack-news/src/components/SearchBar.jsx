import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { submitQuery, addToHistory } from '../actions/actions'

export default function SearchBar () {
    const [query, setQuery] = useState("")
    const history = useSelector(state => state.history)
    const dispatch = useDispatch()
    

    const handleInput = e => {
        setQuery(e.target.value)
    }


    const handleSubmit = e => {
        e.preventDefault()
        dispatch(submitQuery(query))
        !history.includes(query) && dispatch(addToHistory(query))
        setQuery("")
    }


    return (
        <div className="the-News">
            <h1>Search for some News</h1>
            <form onSubmit={(e)=>handleSubmit(e)} id="searchForm">

                <input
                    placeholder="Let's look for some news"
                    onChange={handleInput}
                    value={query}
                    id="prompt"
                    required
                />

                <input 
                    className="Search-button"
                    value="Time for some News"
                    type="submit"
                />
            </form>
        </div>
    )
}