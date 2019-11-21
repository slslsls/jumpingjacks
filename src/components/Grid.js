import React from 'react';
import './Grid.css';
import Translations from '../utils/common/translations';

const dealerCards = ['2','3','4','5','6','7','8','9','10','A'];
const firstUserHandActions = ['hit','hit','hit','hit','hit','hit','hit','hit','hit','hit'];
const userHandActions = {
  '9': ['hit','double_down','double_down','double_down','double_down','hit','hit','hit','hit','hit'],
  '10': ['double_down','double_down','double_down','double_down','double_down','double_down','double_down','double_down','hit','hit'],
  '11': ['double_down','double_down','double_down','double_down','double_down','double_down','double_down','double_down','double_down','hit'],
  '12': ['hit','hit','stay','stay','stay','hit','hit','hit','hit','hit'],
  '13': ['stay','stay','stay','stay','stay','hit','hit','hit','hit','hit'],
  '14': ['stay','stay','stay','stay','stay','hit','hit','hit','hit','hit'],
  '15': ['stay','stay','stay','stay','stay','hit','hit','hit','hit','hit'],
  '16': ['stay','stay','stay','stay','stay','hit','hit','hit','hit','hit'],
  '17': ['stay','stay','stay','stay','stay','stay','stay','stay','stay','stay'],
  'A,2': ['hit','hit','hit','double_down','double_down','hit','hit','hit','hit','hit'],
  'A,3': ['hit','hit','hit','double_down','double_down','hit','hit','hit','hit','hit'],
  'A,4': ['hit','hit','double_down','double_down','double_down','hit','hit','hit','hit','hit'],
  'A,5': ['hit','hit','double_down','double_down','double_down','hit','hit','hit','hit','hit'],
  'A,6': ['hit','double_down','double_down','double_down','double_down','hit','hit','hit','hit','hit'],
  'A,7': ['stay','double_down','double_down','double_down','double_down','stay','stay','hit','hit','hit'],
  'A,8': ['stay','stay','stay','stay','stay','stay','stay','stay','stay','stay'],
  'A,9': ['stay','stay','stay','stay','stay','stay','stay','stay','stay','stay'],
  '2,2': ['split','split','split','split','split','split','hit','hit','hit','hit'],
  '3,3': ['split','split','split','split','split','split','hit','hit','hit','hit'],
  '4,4': ['hit','hit','hit','split','split','hit','hit','hit','hit','hit'],
  '5,5': ['double_down','double_down','double_down','double_down','double_down','double_down','double_down','double_down','hit','hit'],
  '6,6': ['split','split','split','split','split','hit','hit','hit','hit','hit'],
  '7,7': ['split','split','split','split','split','split','hit','hit','hit','hit'],
  '8,8': ['split','split','split','split','split','split','split','split','split','split'],
  '9,9': ['split','split','split','split','split','stay','split','split','stay','stay'],
  '10,10': ['stay','stay','stay','stay','stay','stay','stay','stay','stay','stay'],
  'A,A': ['split','split','split','split','split','split','split','split','split','split']
};
const actionClasses = {
  'hit': 'grid-hit',
  'stay': 'grid-stay',
  'double_down': 'grid-dd',
  'split': 'grid-split'
};

class Grid extends React.Component {
  state = {
    text: Translations[this.props.store.language].blackjack.grid
  };

  render() {
    return (
      <table>
        <tbody>
          <tr>
            <th></th>
            <th></th>
            <th colSpan="10">{this.state.text.dealers_card}</th>
          </tr>
          <tr>
            <th className="your-hand-cell"><div className="your-hand-text">{this.state.text.your_hand}</div></th>
            <th></th>
            {dealerCards.map((c, idx) => <th key={idx}>{c}</th>)}
          </tr>
          <tr>
            <td className="no-top-border"></td>
            <th>2 - 8</th>
            {firstUserHandActions.map((h, idx) => <td key={idx} className={actionClasses[h]}>{this.state.text[h]}</td>)}
          </tr>
          {Object.keys(userHandActions).map((h, idx) =>
            <tr key={idx}>
              <td className="no-top-border"></td>
              <th>{h}</th>
              {userHandActions[h].map((h, idx) => <td  key={idx} className={actionClasses[h]}>{this.state.text[h]}</td>)}
            </tr>
          )}
        </tbody>
      </table>
    );
  }
}

export default Grid;
