import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from 'react-router-dom';

import logo from './logo.svg';
import './App.css';
import CountComponent from './CountComponent';
import AboutMeComponent from './AboutMeComponent';

function App() {
  return (
    <div className="App">
      <Router>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li><Link to="/aboutme">About Me</Link></li>
          <li><Link to="/learn">Learn</Link></li>

        </ul>
        <Switch>
          <Route exact path="/">
            <CountComponent initialCount='5' />
          </Route>
          <Route path="/aboutme">
            <AboutMeComponent name="Rafalin Liyosar"/>
          </Route>
          <Route path="/learn">
            <header className="App-header">
              <img src={logo} className="App-logo" alt="logo" />
              <p>
                Edit <code>src/App.js</code> hello.
        </p>
              <a
                className="App-link"
                href="https://reactjs.org"
                target="_blank"
                rel="noopener noreferrer"
              >
                Rafalin Learn ReactJS by changing this component
        </a>
            </header>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
