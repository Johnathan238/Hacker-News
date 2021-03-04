import React from 'react'
import { Switch, Route, Redirect, NavLink } from 'react-router-dom'
import NewsList from './containers/NewsList'
import News from './containers/News'
import './App.css';

function App() {
  return (
    <div className="App">
      <nav>
        <NavLink to={"/"}>Search</NavLink>
      </nav>

      <NewsList />

    </div>
  );
}

export default App;
