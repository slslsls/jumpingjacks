import React from 'react';
import '../App.css';
import HoldemContainer from './HoldemContainer';
import BlackjackContainer from './BlackjackContainer';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect
} from "react-router-dom";

function App() {
  return (
    <div className="outer-container">
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
    </div>
  );
}

export default App;
