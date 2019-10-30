import React from 'react';

class Result extends React.Component {
  constructor(props) {
    super(props);
    this.state = { result: '' };
  }
  render() {
    return (<p>{this.state.result}</p>);
  }
}

export default Result;
