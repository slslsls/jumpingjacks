const _ = require('lodash');

function getScenario(userCards, dealerCard) {
  const scenarioKey = getScenarioKey(userCards);
  const userTotal = getTotal(userCards);
  if (cards.length == 2) {
    const quickDecision = checkForQuickDecision(userCards);
    if (quickDecision) return quickDecision;
    if (isPair(userCards))

  }
}

function getScenarioKey(cards) {
  let scenarioKey = '';
  if (isPair(cards)) scenarioKey = `${cards[0][0]}${cards[1][0]}`;
  if (cards.length == 2 && hasAce(cards)) {

  }
  const values = [];
  _.each(cards, c => {
    values.push(c[0]);
  });
  if (values.length == 2) {
    if (isPair(values)) {

    }
  }
}

function isPair(cards) {
  return cards.length == 2 && cards[0][0] == cards[1][0];
}

function hasAce(cards) {
  return (c[0][0] == 'A' || c[1][0] == 'A');
}
