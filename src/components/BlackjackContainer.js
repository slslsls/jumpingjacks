import React from 'react';
import CardWrapper from './CardWrapper';
import getShuffledDeck from '../utils/common/dealerUtils';

class BlackjackContainer extends React.Component {
  state = {
    cards: getShuffledDeck('blackjack').slice(0,15),
    currentCardIdx: 0,
    card0Status: 'undealt',
    card1Status: 'undealt',
    card2Status: 'undealt',
    card3Status: 'undealt',
    card4Status: 'undealt',
    card5Status: 'undealt',
    card6Status: 'undealt',
    card7Status: 'undealt',
    card8Status: 'undealt',
    card9Status: 'undealt',
    card10Status: 'undealt',
    card11Status: 'undealt',
    card12Status: 'undealt',
    card13Status: 'undealt',
    card14Status: 'undealt'
  };

  dealCard = () => {
    this.setState({
      [`card${this.state.currentCardIdx}Status`]: '',
      currentCardIdx: this.state.currentCardIdx + 1
    });
  }

  componentDidMount = () => {
    setTimeout(this.dealCard, 0);
    setTimeout(this.dealCard, 300);
    setTimeout(this.dealCard, 600);
    setTimeout(this.dealCard, 900);
  }

  render() {
    return (
      <div>
        <div className="dealer-line" onClick={this.dealCard}>
          <CardWrapper classes={`${this.state.card1Status} card blackjack-user-card-1`} card={this.state.cards[1]} />
          <CardWrapper classes={`${this.state.card3Status} card blackjack-user-card-3`} card={this.state.cards[3]} />
          <p>DEALER</p>
        </div>
        <CardWrapper classes={`${this.state.card0Status} card blackjack-user-card-0`} card={this.state.cards[0]} />
        <CardWrapper classes={`${this.state.card2Status} card blackjack-user-card-2`} card={this.state.cards[2]} />
        <CardWrapper classes={`${this.state.card4Status} card blackjack-user-card-4`} card={this.state.cards[4]} />
        <CardWrapper classes={`${this.state.card5Status} card blackjack-user-card-5`} card={this.state.cards[5]} />
        <CardWrapper classes={`${this.state.card6Status} card blackjack-user-card-6`} card={this.state.cards[6]} />
        <CardWrapper classes={`${this.state.card7Status} card blackjack-user-card-7`} card={this.state.cards[7]} />
        <CardWrapper classes={`${this.state.card8Status} card blackjack-user-card-8`} card={this.state.cards[8]} />
        <CardWrapper classes={`${this.state.card9Status} card blackjack-user-card-9`} card={this.state.cards[9]} />
        <CardWrapper classes={`${this.state.card10Status} card blackjack-user-card-10`} card={this.state.cards[10]} />
        <CardWrapper classes={`${this.state.card11Status} card blackjack-user-card-11`} card={this.state.cards[11]} />
        <CardWrapper classes={`${this.state.card12Status} card blackjack-user-card-12`} card={this.state.cards[12]} />
      </div>
    )
  }
}

export default BlackjackContainer;
