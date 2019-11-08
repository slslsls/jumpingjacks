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
    </div>
  );
}

export default App;
