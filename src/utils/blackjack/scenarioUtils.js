const _ = require('lodash');
const scenarios = require('../../scenarios/blackjack/blackjack.json');

function getAction(userCards, dealerCard) {
  const scenarioKey = getScenarioKey(userCards);
  const dealerCardRank = getCardRank(dealerCard);
  const quickDecision = checkForQuickDecision(scenarioKey);
  if (quickDecision) return quickDecision;
  return scenarios[scenarioKey][dealerCardRank];
}

function getCardRank(card) {
  if (['J', 'Q', 'K'].includes(card[0])) return 'T';
  return card[0];
}

function checkForQuickDecision(scenarioKey) {
  if (scenarioKey < 9) return 'H';
  if (['17', 'A8', 'A9', 'TT'].includes(scenarioKey)) return 'S';
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
  return convertFaceCardsAndPrioritizeAces(scenarioKey);
}

function convertFaceCardsAndPutAceFirst(scenarioKey) {
  scenarioKey = scenarioKey.replace('J', 'T');
  scenarioKey = scenarioKey.replace('Q', 'T');
  scenarioKey = scenarioKey.replace('K', 'T');
  let aceIndex = scenarioKey.indexOf('A');
  if (aceIndex != -1 && aceIndex != 0) {
    scenarioKey = `${scenarioKey[1]}${scenarioKey[0]}`
  }
  return scenarioKey;
}

function isPair(cards) {
  return cards[0][0] == cards[1][0];
}

function hasAce(cards) {
  return (c[0][0] == 'A' || c[1][0] == 'A');
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
