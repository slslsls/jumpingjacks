import React from 'react';
import Action from './Action';
import { ReactComponent as DownCard } from '../assets/downcard.svg';
import getShuffledDeck from '../utils/common/dealerUtils';
import { getAction } from '../utils/blackjack/scenarioUtils';

class BlackjackContainer extends React.Component {
  state = {
    cards: getShuffledDeck('blackjack'),
    cardsInvisible: true
  };

  componentDidMount = () => {
    this.setState({
      dealerCard: this.state.cards[0].cardId,
      userCards: [this.state.cards[1].cardId, this.state.cards[2].cardId],
      action: getAction([this.state.cards[1].cardId, this.state.cards[2].cardId], this.state.cards[0].cardId)
    });
    setTimeout(() => {
      this.setState({
        cardsInvisible: false,
      });
    }, 1);
  }

  evaluate = (e, action) => {
    if (action === this.state.action) {
      console.log('Great!')
    } else {
      console.log('Shit.')
    }
  }

  render() {
    return (
      <div>
        <div className="blackjack-dealer-cards-container">
          <div className={`${this.state.cardsInvisible ? "cards-invisible" : ""} card blackjack-dealer-downcard`}>
            <DownCard />
          </div>
          <div className={`${this.state.cardsInvisible ? "cards-invisible" : ""} card blackjack-dealer-upcard`}>
            {this.state.cards[0].component}
          </div>
          <p>DEALER</p>
        </div>
        <div className="blackjack-user-cards-container">
          <div className={`${this.state.cardsInvisible ? "cards-invisible" : ""} card blackjack-user-backcard`}>
            {this.state.cards[1].component}
          </div>
          <div className={`${this.state.cardsInvisible ? "cards-invisible" : ""} card blackjack-user-frontcard`}>
            {this.state.cards[2].component}
          </div>
        </div>
        <div className="blackjack-actions-container">
          <Action name="Hit" clickHandler={this.evaluate} />
          <Action name="Stay" clickHandler={this.evaluate} />
          <Action name="Split" clickHandler={this.evaluate} />
          <Action name="DD" clickHandler={this.evaluate} />
        </div>
      </div>
    )
  }
}

export default BlackjackContainer;
