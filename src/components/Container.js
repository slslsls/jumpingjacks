import React from 'react';
import ScenarioUtils from '../utils/scenarioUtils';
import Action from './Action';
import Result from './Result';

class Container extends React.Component {
  state = {
    scenario: ScenarioUtils.getRandomScenario('preFlop', 'Early'),
    result: ''
  };

  evaluate = (e, action) => {
    if (action == this.state.scenario.action) {
      console.log('Good job!')
      this.setState({ result: 'Good job!' });
    } else {
      console.log('Shit.')
      this.setState({ result: 'Shit.' });
    }
  }

  render() {
    return (
      <div>
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

export default Container;
