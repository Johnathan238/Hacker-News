import React from 'react';
import {useDispatch, useSelector} from 'react-redux'
import _ from "lodash"
import {GetNewsList} from '../actions/NewsActions'

const NewsList = () => {
    const dispatch = useDispatch()
    const state = useSelector(state => state.NewsList)
    React.useEffect( () => {
        FetchData()
    }, [])

    const FetchData = () => {
        dispatch (GetNewsList())
    }

    const Showdata = () => {
        if(!_.isEmpty(state.data)) {
            return state.data.map( list => {
                return <div>
                    <p>{list.payload}</p>
                </div>
            })
        }

        if (state.loading) {
            return <p>Loading ....</p>
        }

        if (state.errorMsg !== ""){
            return <p>{state.errorMsg}</p>
        }

        return <p>IDK</p>
    }
    return (
        <div>
            {Showdata()}
        </div>
    );
}

export default NewsList