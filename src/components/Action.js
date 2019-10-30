import React from 'react';

class Action extends React.Component {
  render() {
    return (
      <div className="action-button" onClick={e => { this.props.clickHandler(e, this.props.name) }}>
        {this.props.name}
      </div>
    );
  }
}

export default Action;
