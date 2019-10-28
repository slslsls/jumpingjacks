import React from 'react';
import ScenarioUtils from '../utils/scenarioUtils';

class Table extends React.Component {
  constructor(props) {
    super(props);
    this.getRandomScenario = this.getRandomScenario.bind(this);
  }

  getRandomScenario() {

  }

  render() {
    return (
      <p onClick={this.getRandomScenario}>hi</p>
    )
  }
}

export default Table;
