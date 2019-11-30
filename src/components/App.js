import React from 'react';
import Home from './Home';
import BlackjackContainer from './BlackjackContainer';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom";
import './App.css';
import Translations from '../utils/common/translations';

function App() {
  return (
    <div className="container">
      <Router>
        <Switch>
          <Route path="/practice-blackjack-english">
            <BlackjackContainer text={Translations.english} />
          </Route>
          <Route path="/practice-blackjack-portuguese">
            <BlackjackContainer text={Translations.portuguese} />
          </Route>
          <Route path="/practice-blackjack-mandarin">
            <BlackjackContainer text={Translations.mandarin} />
          </Route>
          <Route path="/practice-blackjack-spanish">
            <BlackjackContainer text={Translations.spanish} />
          </Route>
          <Route path="/practice-blackjack-malay">
            <BlackjackContainer text={Translations.malay} />
          </Route>
          <Route path="/practice-blackjack-filipino">
            <BlackjackContainer text={Translations.filipino} />
          </Route>
          <Route path="/practice-blackjack-french">
            <BlackjackContainer text={Translations.french} />
          </Route>
          <Route path="/practice-blackjack-italian">
            <BlackjackContainer text={Translations.italian} />
          </Route>
          <Route path="/">
            <Home />
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
