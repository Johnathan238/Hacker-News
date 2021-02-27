import React from 'react'
import { Switch, Route, Redirect, NavLink } from 'react-router-dom'
import HacknewsList from './containers/HacknewsList'
import './App.css';

function App() {
  return (
    <div className="App">
      <nav>
        <NavLink to={"/"}>Search</NavLink>
      </nav>
      <Switch>
        <Route path={"/"} exact component={HacknewsList}/>
        <Route path={"/hacknews/:hacknews"} exact component={HacknewsList}/>
        <Redirect to={"/"} />
      </Switch>
    </div>
  );
}

export default App;
