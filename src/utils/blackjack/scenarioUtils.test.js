const { expect } = require('chai');
const { getAction } = require('./scenarioUtils');
const scenarios = require('../../scenarios/blackjack/blackjack');
const _ = require('lodash');

describe('getAction', () => {

  const cases = [
    { userCards: ['AS', '4D'], dealerCard: '9S' , expectedAction: 'H' },
    { userCards: ['5H', '5D'], dealerCard: '2H' , expectedAction: 'D' },
    { userCards: ['JC', 'JD'], dealerCard: 'AS' , expectedAction: 'S' },
    { userCards: ['9S', '8C'], dealerCard: 'KS' , expectedAction: 'S' },
    { userCards: ['8S', '8H'], dealerCard: 'JS' , expectedAction: 'P' },
    { userCards: ['2S', '3S'], dealerCard: '9S' , expectedAction: 'H' },
    { userCards: ['KH', '2H'], dealerCard: '9S' , expectedAction: 'H' },
    { userCards: ['KS', 'KD'], dealerCard: '2D' , expectedAction: 'S' },
    { userCards: ['TS', 'TH'], dealerCard: 'QD' , expectedAction: 'S' },
    { userCards: ['5H', 'AS'], dealerCard: 'AH' , expectedAction: 'H' },
    { userCards: ['JD', 'QH'], dealerCard: 'TC' , expectedAction: 'S' },
    { userCards: ['AD', 'AC'], dealerCard: 'AH' , expectedAction: 'P' },
    { userCards: ['TS', 'TH'], dealerCard: 'TC' , expectedAction: 'S' },
    { userCards: ['2H', '2S'], dealerCard: '2C' , expectedAction: 'P' },
    { userCards: ['JH', 'JD'], dealerCard: '8H' , expectedAction: 'S' },
    { userCards: ['TH', '4D'], dealerCard: 'AC' , expectedAction: 'H' },
  ];

  _.each(cases, c => {
    it(`should return the correct action for userCards: ${c.userCards}, dealerCard: ${c.dealerCard}`, () => {
      expect(getAction(c.userCards, c.dealerCard)).to.equal(c.expectedAction);
    });
  });

});
