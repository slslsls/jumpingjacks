const _ = require('lodash');
const scenarios = require('../../scenarios/blackjack/blackjack');

function getAction(userCards, dealerCard) {
  const scenarioKey = getScenarioKey(userCards);
  const dealerCardRank = getCardRank(dealerCard);
  const quickDecision = checkForQuickDecision(scenarioKey);
  if (quickDecision) return quickDecision;
  return scenarios[scenarioKey][dealerCardRank];
}

function getCardRank(card) {
  if (['T', 'J', 'Q', 'K'].includes(card[0])) return 8;
  if (card[0] == 'A') return 9;
  return card[0] - 2;
}

function checkForQuickDecision(scenarioKey) {
  if (scenarioKey < 9) return 'H';
  if (['17', '18', '19', '20', 'A8', 'A9', 'TT'].includes(scenarioKey)) return 'S';
  if (['88', 'AA'].includes(scenarioKey)) return 'P';
  return false;
}

function getScenarioKey(cards) {
  let scenarioKey = '';
  if (cards.length == 2) {
    if (isPair(cards) || hasAce(cards)) {
      scenarioKey = `${cards[0][0]}${cards[1][0]}`;
    } else {
      scenarioKey = total(cards);
    }
  } else {
    scenarioKey = total(cards);
  }
  return convertFaceCardsAndPutAceFirst(scenarioKey);
}

function convertFaceCardsAndPutAceFirst(scenarioKey) {
  let newKey = '';
  for (let i = 0; i < scenarioKey.length; i++) {
    if (['J', 'Q', 'K'].includes(scenarioKey[i])) {
      newKey += 'T';
    } else {
      newKey += scenarioKey[i]
    }
  }
  let aceIndex = newKey.indexOf('A');
  if (aceIndex != -1 && aceIndex != 0) {
    newKey = `${newKey[1]}${newKey[0]}`
  }
  return newKey;
}

function isPair(cards) {
  return cards[0][0] == cards[1][0];
}

function hasAce(cards) {
  return (cards[0][0] == 'A' || cards[1][0] == 'A');
}

function total(cards) {
  let total = 0;
  _.each(cards, c => {
    if (['T', 'J', 'Q', 'K'].includes(c[0])) {
      total += 10;
    } else if (c[0] == 'A') {
      total += 1;
    } else {
      total += parseInt(c[0]);
    }
  });
  return total.toString();
}

module.exports = {
  getAction
};
