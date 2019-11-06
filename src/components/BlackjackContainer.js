import React from 'react';
import { ReactComponent as DownCard } from '../assets/downcard.svg';
import getShuffledDeck from '../utils/common/dealerUtils';
import { getAction } from '../utils/blackjack/scenarioUtils';

class BlackjackContainer extends React.Component {
  state = {
    cards: getShuffledDeck('blackjack'),
    cardsDealtStage: 'cards-pre-deal'
  };

  componentDidMount = () => {
    this.setState({
      dealerCard: this.state.cards[0].cardId,
      userCards: [this.state.cards[1].cardId, this.state.cards[2].cardId],
      evaluated: false,
      correctAction: getAction([this.state.cards[1].cardId, this.state.cards[2].cardId], this.state.cards[0].cardId),
      selectedAction: null
    });
    setTimeout(() => {
      this.setState({
        cardsDealtStage: 'cards-dealt',
      });
    }, 1);
  }

  evaluate = (action) => {
    return () => {
      if (action === this.state.correctAction) {
        console.log('Great!')
      } else {
        console.log('Shit.')
      }
      this.setState({
        evaluated: true,
        selectedAction: action
      });
    }
  }

  getEvaluatedColor = (action) => {
    if (this.state.evaluated) {
      if (action === this.state.correctAction) return 'evaluated-correct';
      if (action === this.state.selectedAction) return 'evaluated-incorrect';
      return 'evaluated-nothing';
    }
  }

  resetState = () => {
    this.setState({
      cards: getShuffledDeck('blackjack'),
      cardsDealtStage: 'cards-pre-deal',
      dealerCard: this.state.cards[0].cardId,
      userCards: [this.state.cards[1].cardId, this.state.cards[2].cardId],
      evaluated: false,
      correctAction: getAction([this.state.cards[1].cardId, this.state.cards[2].cardId], this.state.cards[0].cardId),
      selectedAction: null
    });
  }

  deal = () => {
    this.setState({
      cardsDealtStage: 'cards-dealt'
    });
  }

  dealAgain = () => {
    if (this.state.evaluated) {
      this.setState({
        cardsDealtStage: 'cards-discarded',
      });
      setTimeout(this.resetState, 500);
      setTimeout(this.deal, 1000);
    }
  }

  render() {
    return (
      <div onClick={this.dealAgain}>
        <div className="blackjack-dealer-cards-container">
          <div className={`${this.state.cardsDealtStage} card blackjack-dealer-downcard`}>
            <DownCard />
          </div>
          <div className={`${this.state.cardsDealtStage} card blackjack-dealer-upcard`}>
            {this.state.cards[0].component}
          </div>
          <p>DEALER</p>
        </div>
        <div className="blackjack-user-cards-container">
          <div className={`${this.state.cardsDealtStage} card blackjack-user-backcard`}>
            {this.state.cards[1].component}
          </div>
          <div className={`${this.state.cardsDealtStage} card blackjack-user-frontcard`}>
            {this.state.cards[2].component}
          </div>
        </div>
        <div className="blackjack-actions-container">
          <div className={`${this.getEvaluatedColor('Hit')} action-button`} onClick={this.evaluate('Hit')}>
            Hit
          </div>
          <div className={`${this.getEvaluatedColor('Stay')} action-button`} onClick={this.evaluate('Stay')}>
            Stay
          </div>
          <div className={`${this.getEvaluatedColor('Split')} action-button`} onClick={this.evaluate('Split')}>
            Split
          </div>
          <div className={`${this.getEvaluatedColor('DD')} action-button`} onClick={this.evaluate('DD')}>
            DD
          </div>
        </div>
        <div className={`${!this.state.evaluated ? 'invisible' : ''} deal-again`}>
          Tap anywhere to deal again!
        </div>
      </div>
    )
  }
}

export default BlackjackContainer;
