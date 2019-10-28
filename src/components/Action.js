import React from 'react';
// import '../App.css';

class Action extends React.Component {
  render() {
    return (
      <div className="action-button">
        {this.props.name}
      </div>
    );
  }
}

export default Action;
