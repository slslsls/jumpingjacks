import React from 'react';
import { ReactComponent as Card7D } from '../assets/JH.svg';
import { ReactComponent as Card7S } from '../assets/7S.svg';

class BlackjackContainer extends React.Component {
  render() {
    return (
      <div>
        <h1>This is the Blackjack page</h1>
        <div className="user-cards-container">
          <div className="user-cards">
            <Card7D className="card back-card"/>
            <Card7S className="card front-card"/>
          </div>
        </div>
      </div>
    )
  }
}

export default BlackjackContainer;
