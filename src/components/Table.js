import React from 'react';
import ScenarioUtils from '../utils/scenarioUtils';

class Table extends React.Component {
  constructor(props) {
    super(props);
    this.state = { scenario: ScenarioUtils.getRandomScenario('preFlop', 'Early') };
  }

  render() {
    return (
      <div>
        <p>{this.state.scenario.stage}</p>
        <p>{this.state.scenario.position}</p>
        <p>{this.state.scenario.leadUp}</p>
        <p>{this.state.scenario.cards}</p>
      </div>
    );
  }
}

export default Table;
