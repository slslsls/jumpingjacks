import React from 'react';
import ScenarioUtils from '../utils/holdem/scenarioUtils';
import Action from './Action';
import Result from './Result';

class HoldemContainer extends React.Component {
  state = {
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
      if (action == this.state.scenario.action) {
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
        <p>{this.state.scenario.stage}</p>
        <p>{this.state.scenario.position}</p>
        <p>{this.state.scenario.leadUp}</p>
        <p>{this.state.scenario.cards}</p>
        <p>(The correct answer is "{this.state.scenario.action}")</p>
        <Action name="Raise" clickHandler={this.evaluate} />
        <Action name="Call" clickHandler={this.evaluate} />
        <Action name="Check" clickHandler={this.evaluate} />
        <Action name="Fold" clickHandler={this.evaluate} />
        <Result value={this.state.result} />
      </div>
    )
  }
}

export default HoldemContainer;
