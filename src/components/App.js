import React from 'react';
import HoldemContainer from './HoldemContainer';
import BlackjackContainer from './BlackjackContainer';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect
} from "react-router-dom";
import './App.css';

function App() {
  return (
    <div>
      <Router>
        <Switch>
          <Route path="/holdem">
            <HoldemContainer />
          </Route>
          <Route path="/blackjack">
            <BlackjackContainer />
          </Route>
          <Route>
            <Redirect to="/blackjack"/>
          </Route>
        </Switch>
      </Router>
      <div className="hamburger">
        <div className="hamburger-line"></div>
        <div className="hamburger-line"></div>
        <div className="hamburger-line"></div>
      </div>
    </div>
  );
}

export default App;
