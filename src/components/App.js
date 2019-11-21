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
import { decorate, observable } from 'mobx';

class Store {
  language = 'English'
}

decorate(Store, {
  language: observable
});

const appStore = new Store();

function App() {
  return (
    <div>
      <Router>
        <Switch>
          <Route path="/holdem">
            <HoldemContainer />
          </Route>
          <Route path="/blackjack">
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
