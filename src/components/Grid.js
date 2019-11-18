import React from 'react';
import './Grid.css';

const dealerCards = ['2','3','4','5','6','7','8','9','10','A'];
const firstUserHandActions = ['H','H','H','H','H','H','H','H','H','H'];
const userHandActions = {
  '9': ['H','DD','DD','DD','DD','H','H','H','H','H'],
  '10': ['DD','DD','DD','DD','DD','DD','DD','DD','H','H'],
  '11': ['DD','DD','DD','DD','DD','DD','DD','DD','DD','H'],
  '12': ['H','H','St','St','St','H','H','H','H','H'],
  '13': ['St','St','St','St','St','H','H','H','H','H'],
  '14': ['St','St','St','St','St','H','H','H','H','H'],
  '15': ['St','St','St','St','St','H','H','H','H','H'],
  '16': ['St','St','St','St','St','H','H','H','H','H'],
  '17': ['St','St','St','St','St','St','St','St','St','St'],
  'A,2': ['H','H','H','DD','DD','H','H','H','H','H'],
  'A,3': ['H','H','H','DD','DD','H','H','H','H','H'],
  'A,4': ['H','H','DD','DD','DD','H','H','H','H','H'],
  'A,5': ['H','H','DD','DD','DD','H','H','H','H','H'],
  'A,6': ['H','DD','DD','DD','DD','H','H','H','H','H'],
  'A,7': ['St','DD','DD','DD','DD','St','St','H','H','H'],
  'A,8': ['St','St','St','St','St','St','St','St','St','St'],
  'A,9': ['St','St','St','St','St','St','St','St','St','St'],
  '2,2': ['Sp','Sp','Sp','Sp','Sp','Sp','H','H','H','H'],
  '3,3': ['Sp','Sp','Sp','Sp','Sp','Sp','H','H','H','H'],
  '4,4': ['H','H','H','Sp','Sp','H','H','H','H','H'],
  '5,5': ['DD','DD','DD','DD','DD','DD','DD','DD','H','H'],
  '6,6': ['Sp','Sp','Sp','Sp','Sp','H','H','H','H','H'],
  '7,7': ['Sp','Sp','Sp','Sp','Sp','Sp','H','H','H','H'],
  '8,8': ['Sp','Sp','Sp','Sp','Sp','Sp','Sp','Sp','Sp','Sp'],
  '9,9': ['Sp','Sp','Sp','Sp','Sp','St','Sp','Sp','St','St'],
  '10,10': ['St','St','St','St','St','St','St','St','St','St'],
  'A,A': ['Sp','Sp','Sp','Sp','Sp','Sp','Sp','Sp','Sp','Sp']
};
const actionClasses = {
  'H': 'grid-hit',
  'St': 'grid-stay',
  'DD': 'grid-dd',
  'Sp': 'grid-split'
};

class Grid extends React.Component {
  render() {
    return (
      <table>
        <tr>
          <th></th>
          <th></th>
          <th colspan="10">Dealer's Card</th>
        </tr>
        <tr>
          <th></th>
          <th></th>
          {dealerCards.map(c => <th>{c}</th>)}
        </tr>
        <tr>
          <td></td>
          <th>2 - 8</th>
          {firstUserHandActions.map(h => <td className={actionClasses[h]}>{h}</td>)}
        </tr>
        {Object.keys(userHandActions).map(h =>
          <tr>
            <td></td>
            <th>{h}</th>
            {userHandActions[h].map(h => <td className={actionClasses[h]}>{h}</td>)}
          </tr>
        )}
      </table>
    );
  }
}

export default Grid;
