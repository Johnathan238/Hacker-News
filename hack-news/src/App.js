import React from 'react'
import { Switch, Route, Redirect, NavLink } from 'react-router-dom'
import NewsList from './containers/NewsList'
import './App.css';

function App() {
  return (
    <div className="App">
      <nav>
        <NavLink to={"/"}>Search</NavLink>
      </nav>

      <Switch>
        <Route path={"/"} exact component={NewsList}/>
        <Route path={"/news/:news"} exact component={NewsList}/>
        <Redirect to={"/"} />
      </Switch>
      
    </div>
  );
}

export default App;
