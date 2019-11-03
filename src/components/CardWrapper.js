import React from 'react';

class CardWrapper extends React.Component {
  render() {
    return (
      <div className={this.props.classes}>
        {this.props.card}
      </div>
    );
  }
}

export default CardWrapper;
