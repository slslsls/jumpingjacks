import React from 'react';
import CardWrapper from './CardWrapper';
import Action from './Action';
import getShuffledDeck from '../utils/common/dealerUtils';
import { getAction } from '../utils/blackjack/scenarioUtils';

class BlackjackContainer extends React.Component {
  state = {
    initialCardsDealt: false,
    cards: getShuffledDeck('blackjack').slice(0,15),
    nextCardIdx: 0
  };

  dealCard = () => {
    if (this.state.initialCardsDealt) {
      const newUserCard = this.state.cards[this.state.nextCardIdx].cardId;
      this.setState({
        userCards: this.state.userCards.concat([newUserCard])
      });
    }
    this.setState({
      nextCardIdx: this.state.nextCardIdx + 1
    });
  }

  componentDidMount = () => {
    setTimeout(this.dealCard, 0);
    setTimeout(this.dealCard, 250);
    setTimeout(this.dealCard, 500);
    setTimeout(this.dealCard, 750);
    setTimeout(() => {
      this.setState({
        initialCardsDealt: true,
        dealerCard: this.state.cards[3].cardId,
        userCards: [this.state.cards[0].cardId, this.state.cards[2].cardId],
        action: getAction([this.state.cards[0].cardId, this.state.cards[2].cardId], this.state.cards[3].cardId)
      });
    }, 751);
    setTimeout(() => {
      console.log(`User cards: ${this.state.userCards}`)
      console.log(`Dealer card: ${this.state.dealerCard}`)
      console.log(`Action: ${this.state.action}`)
    },2000)
  }

  evaluate = (e, action) => {
    if (!this.state.initialCardsDealt) return;
    if (!this.state.roundIsOver) {
      if (action === this.state.scenario.action) {
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
      <div>
        <div className="dealer-line" onClick={this.dealCard}>
          <CardWrapper classes={`${this.state.nextCardIdx > 1 ? '' : 'undealt'} card blackjack-user-card-1`} card={this.state.cards[1].component} />
          <CardWrapper classes={`${this.state.nextCardIdx > 3 ? '' : 'undealt'} card blackjack-user-card-3`} card={this.state.cards[3].component} />
          <p>DEALER</p>
        </div>
        <div className="blackjack-user-cards-container">
          <CardWrapper classes={`${this.state.nextCardIdx > 0 ? '' : 'undealt'} card blackjack-user-card-0`} card={this.state.cards[0].component} />
          <CardWrapper classes={`${this.state.nextCardIdx > 2 ? '' : 'undealt'} card blackjack-user-card-2`} card={this.state.cards[2].component} />
          <CardWrapper classes={`${this.state.nextCardIdx > 4 ? '' : 'undealt'} card blackjack-user-card-4`} card={this.state.cards[4].component} />
          <CardWrapper classes={`${this.state.nextCardIdx > 5 ? '' : 'undealt'} card blackjack-user-card-5`} card={this.state.cards[5].component} />
          <CardWrapper classes={`${this.state.nextCardIdx > 6 ? '' : 'undealt'} card blackjack-user-card-6`} card={this.state.cards[6].component} />
          <CardWrapper classes={`${this.state.nextCardIdx > 7 ? '' : 'undealt'} card blackjack-user-card-7`} card={this.state.cards[7].component} />
          <CardWrapper classes={`${this.state.nextCardIdx > 8 ? '' : 'undealt'} card blackjack-user-card-8`} card={this.state.cards[8].component} />
          <CardWrapper classes={`${this.state.nextCardIdx > 9 ? '' : 'undealt'} card blackjack-user-card-9`} card={this.state.cards[9].component} />
          <CardWrapper classes={`${this.state.nextCardIdx > 10 ? '' : 'undealt'} card blackjack-user-card-10`} card={this.state.cards[10].component} />
          <CardWrapper classes={`${this.state.nextCardIdx > 11 ? '' : 'undealt'} card blackjack-user-card-11`} card={this.state.cards[11].component} />
          <CardWrapper classes={`${this.state.nextCardIdx > 12 ? '' : 'undealt'} card blackjack-user-card-12`} card={this.state.cards[12].component} />
        </div>
        <div className="blackjack-actions-container">
          <Action name="Hit" clickHandler={this.evaluate} />
          <Action name="Stay" clickHandler={this.evaluate} />
          <Action name="Split" clickHandler={this.evaluate} />
          <Action name="Double" clickHandler={this.evaluate} />
        </div>
      </div>
    )
  }
}

export default BlackjackContainer;
