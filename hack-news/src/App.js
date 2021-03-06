
import React from 'react'
import TopNews from './components/TopNews'
import SearchBar from './components/SearchBar'
import History from './components/History'
import Results from './components/Results'
import Footer from './components/Footer'
import './App.css'

function App () {
  return (
    <div className="app" >

      <SearchBar />
      <Results />
      <TopNews />
      <History />

      <Footer />

    </div>
  )
}

export default App