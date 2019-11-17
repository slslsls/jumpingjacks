import React from 'react';
import { ReactComponent as HomeButton } from '../assets/homebutton.svg';
import { ReactComponent as DownCard } from '../assets/downcard.svg';
import ScenarioUtils from '../utils/holdem/scenarioUtils';
import Result from './Result';
import { Link } from "react-router-dom";

class HoldemContainer extends React.Component {
  state = {
    cardsDealtStage: 'cards-pre-deal',
    instantTransition: false,
    correctAnswers: 0,
    totalAnswers: 0,
    scenario: ScenarioUtils.getScenario('preFlop', 'Early'),
    roundIsOver: false,
    result: ''
  };

  getNewScenario = () => {
    if (this.state.roundIsOver) {
      this.setState({
        scenario: ScenarioUtils.getScenario('preFlop', 'Early'),
        roundIsOver: false
      });
    }
  }

  evaluate = (e, action) => {
    if (!this.state.roundIsOver) {
      if (action === this.state.scenario.action) {
        this.setState({
          result: 'Good job!',
          roundIsOver: true
        });
      } else {
        this.setState({
          result: 'Shit.',
          roundIsOver: true
        });
      }
    }
  }

  render() {
    return (
      <div onClick={this.getNewScenario}>
        <div className="ad"></div>
        <Link to="/" className="home-button-container">
          <HomeButton className="home-button" />
        </Link>
        <p>{this.state.scenario.stage}</p>
        <p>{this.state.scenario.position}</p>
        <p>{this.state.scenario.leadUp}</p>
        <p>{this.state.scenario.cards}</p>
        <p>(The correct answer is "{this.state.scenario.action}")</p>
        <div className="action-button" onClick={this.evaluate('Raise')}>
          Raise
        </div>
        <div className="action-button" onClick={this.evaluate('Call')}>
          Call
        </div>
        <div className="action-button" onClick={this.evaluate('Check')}>
          Check
        </div>
        <div className="action-button" onClick={this.evaluate('Fold')}>
          Fold
        </div>
        <Result value={this.state.result} />
      </div>
    )
  }
}

export default HoldemContainer;
