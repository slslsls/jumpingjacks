import React from 'react';
import { ReactComponent as DownCard } from '../assets/downcard.svg';
import { ReactComponent as InfoButton } from '../assets/infobutton.svg';
import { ReactComponent as HomeButton } from '../assets/homebutton.svg';
import Grid from './Grid';
import getShuffledDeck from '../utils/common/dealerUtils';
import { getAction } from '../utils/blackjack/scenarioUtils';
import './BlackjackContainer.css';
import { Link } from "react-router-dom";
import Translations from '../utils/common/translations';

class BlackjackContainer extends React.Component {
  state = {
    cards: getShuffledDeck('blackjack'),
    cardsDealtStage: 'cards-pre-deal',
    instantTransition: false,
    correctAnswers: 0,
    totalAnswers: 0,
    showGrid: false,
    text: Translations[this.props.store.language].blackjack.gameplay
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
    if (!this.state.evaluated) {
      return () => {
        this.setState({
          evaluated: true,
          selectedAction: action,
          totalAnswers: this.state.totalAnswers + 1
        });
        if (action === this.state.correctAction) {
          this.setState({
            correctAnswers: this.state.correctAnswers + 1,
            evaluation: 'evaluation-message-correct'
          });
        } else {
          this.setState({
            evaluation: 'evaluation-message-incorrect'
          });
        }
      }
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
      evaluated: false,
      selectedAction: null,
      instantTransition: true
    });
    this.setState({
      dealerCard: this.state.cards[0].cardId,
      userCards: [this.state.cards[1].cardId, this.state.cards[2].cardId],
      correctAction: getAction([this.state.cards[1].cardId, this.state.cards[2].cardId], this.state.cards[0].cardId)
    });
  }

  deal = () => {
    this.setState({
      cardsDealtStage: 'cards-dealt',
      instantTransition: false
    });
  }

  dealAgain = (e) => {
    if (this.state.evaluated && e.target.id !== 'info' && !this.state.showGrid) {
      this.setState({
        cardsDealtStage: 'cards-discarded',
      });
      setTimeout(this.resetState, 200);
      setTimeout(this.deal, 400);
    }
  }

  getScore = () => {
    return `${this.state.correctAnswers}/${this.state.totalAnswers} (${Math.round((this.state.correctAnswers/this.state.totalAnswers) * 100)}%)`
  }

  toggleGrid = () => {
    this.setState({
      showGrid: !this.state.showGrid
    });
  }

  render() {
    return (
      <div class="outer-container" onClick={this.dealAgain}>
        <div>
          <div className="ad"></div>
          <div className="dealer-cards-container">
            <div className={`${this.state.cardsDealtStage} ${this.state.instantTransition ? 'instant-transition' : ''} card dealer-downcard`}>
              <DownCard />
            </div>
            <div className={`${this.state.cardsDealtStage} ${this.state.instantTransition ? 'instant-transition' : ''} card dealer-upcard`}>
              {this.state.cards[0].component}
            </div>
            <p>{this.state.text.dealer}</p>
          </div>
          <div className="user-cards-container">
            <div className={`${this.state.cardsDealtStage} ${this.state.instantTransition ? 'instant-transition' : ''} card user-backcard`}>
              {this.state.cards[1].component}
            </div>
            <div className={`${this.state.cardsDealtStage} ${this.state.instantTransition ? 'instant-transition' : ''} card user-frontcard`}>
              {this.state.cards[2].component}
            </div>
          </div>
        </div>
        <div className="actions-container">
          <div className={`${this.getEvaluatedColor('DD')} action-button`} onClick={this.evaluate('DD')}>
            {this.state.text.double_down}
          </div>
          <div className={`${this.getEvaluatedColor('Split')} action-button`} onClick={this.evaluate('Split')}>
            {this.state.text.split}
          </div>
          <div className={`${this.getEvaluatedColor('Stay')} action-button`} onClick={this.evaluate('Stay')}>
            {this.state.text.stay}
          </div>
          <div className={`${this.getEvaluatedColor('Hit')} action-button`} onClick={this.evaluate('Hit')}>
            {this.state.text.hit}
          </div>
          <div className={`${!this.state.evaluated ? 'invisible' : ''} deal-again`}>
            <span className={
              `${this.state.evaluated ? '' : 'invisible' }
              ${this.state.evaluation}
              deal-again
              evaluation-message`
            }>{this.getScore()}</span>{this.state.text.deal_again}
            </div>
        </div>
        <InfoButton id="info" className="info-button" onClick={this.toggleGrid} />
        <Link to="/" className="home-button-container">
          <HomeButton className="home-button" />
        </Link>
        <div className={`${this.state.showGrid ? '' : 'grid-offscreen'} grid`}>
          <Grid store={this.props.store}/>
        </div>
      </div>
    )
  }
}

export default BlackjackContainer;
