const { expect } = require('chai');
const { getAction } = require('./scenarioUtils');
const scenarios = require('../../scenarios/blackjack/blackjack');
const _ = require('lodash');

describe('getAction', () => {

  const cases = [
    { userCards: ['AS', '4D'], dealerCard: '9S' , expectedAction: 'Hit' },
    { userCards: ['5H', '5D'], dealerCard: '2H' , expectedAction: 'DD' },
    { userCards: ['JC', 'JD'], dealerCard: 'AS' , expectedAction: 'Stay' },
    { userCards: ['9S', '8C'], dealerCard: 'KS' , expectedAction: 'Stay' },
    { userCards: ['8S', '8H'], dealerCard: 'JS' , expectedAction: 'Split' },
    { userCards: ['2S', '3S'], dealerCard: '9S' , expectedAction: 'Hit' },
    { userCards: ['KH', '2H'], dealerCard: '9S' , expectedAction: 'Hit' },
    { userCards: ['KS', 'KD'], dealerCard: '2D' , expectedAction: 'Stay' },
    { userCards: ['TS', 'TH'], dealerCard: 'QD' , expectedAction: 'Stay' },
    { userCards: ['5H', 'AS'], dealerCard: 'AH' , expectedAction: 'Hit' },
    { userCards: ['JD', 'QH'], dealerCard: 'TC' , expectedAction: 'Stay' },
    { userCards: ['AD', 'AC'], dealerCard: 'AH' , expectedAction: 'Split' },
    { userCards: ['TS', 'TH'], dealerCard: 'TC' , expectedAction: 'Stay' },
    { userCards: ['2H', '2S'], dealerCard: '2C' , expectedAction: 'Split' },
    { userCards: ['JH', 'JD'], dealerCard: '8H' , expectedAction: 'Stay' },
    { userCards: ['TH', '4D'], dealerCard: 'AC' , expectedAction: 'Hit' },
  ];

  _.each(cases, c => {
    it(`should return the correct action for userCards: ${c.userCards}, dealerCard: ${c.dealerCard}`, () => {
      expect(getAction(c.userCards, c.dealerCard)).to.equal(c.expectedAction);
    });
  });

});
