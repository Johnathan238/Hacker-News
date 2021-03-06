
import React from 'react'
import TopNews from './components/TopNews'
import SearchBar from './components/SearchBar'
import History from './components/History'
import Results from './components/Results'
import './App.css'

function App () {
  return (
    <div>
      <SearchBar />
      <Results />
      <TopNews />
      <History />
    </div>
  )
}

export default App