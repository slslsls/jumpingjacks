// const mocha = require('mocha');
const { expect } = require('chai');
const proxyquire = require('proxyquire');
const { getRandomScenario } = require('./scenarioUtils');
const groups = require('../scenarios/groups');
const preFlop = require('../scenarios/pre-flop');
const _ = require('lodash');

function validateScenario(groupsObject, stageObject, scenario) {
  let { stage, action, position, leadUp, group, cards } = scenario;
  let potentialGroups = stageObject[action][position][leadUp];
  let potentialCards = groupsObject[group];

  expect(potentialGroups).to.include(group);
  expect(potentialCards).to.include(cards);
}

describe('getRandomScenario', () => {

  it('should return a valid random scenario when given no args', () => {
    let randomScenario = getRandomScenario();
    validateScenario(groups, preFlop, randomScenario);
  });

  const situations = [
    { id: 1, args: { stage: 'preFlop', action: 'Fold', leadUp: 'Two or more callers' }, expectedGroups: [5] },
    { id: 2, args: { action: 'check' }, expectedGroups: [3,4,5] },
    { id: 3, args: { action: 'call', leadUp: 'Raised, no callers' }, expectedGroups: [2,3] },
    { id: 4, args: { action: 'raise', leadUp: 'Raised, no callers' }, expectedGroups: [1] }
  ];

  _.each(situations, s => {
    it(`should return a valid random scenario within specifications (situation ${s.id})`, () => {
      let randomScenario = getRandomScenario(s.args);
      validateScenario(groups, preFlop, randomScenario);
      expect(s.expectedGroups).to.contain(randomScenario.group);
    });
  });

  it.skip('should return empty object if args do not lead to any valid scenarios', () => {

  });

});
