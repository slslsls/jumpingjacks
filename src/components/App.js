import React from 'react';
import Home from './Home';
import HoldemContainer from './HoldemContainer';
import BlackjackContainer from './BlackjackContainer';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom";

class Store {
  language = 'English'
}

const appStore = new Store();

function App() {
  return (
    <div>
      <Router>
        <Switch>
          <Route path="/holdem">
            <HoldemContainer />
          </Route>
          <Route path="/practice-blackjack">
            <BlackjackContainer store={appStore} />
          </Route>
          <Route path="/">
            <Home store={appStore} />
          </Route>
          <Route>
            <Redirect to="/"/>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
