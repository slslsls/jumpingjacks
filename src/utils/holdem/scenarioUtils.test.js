// const mocha = require('mocha');
const { expect } = require('chai');
const { getScenario } = require('./scenarioUtils');
const groups = require('../scenarios/holdem/groups');
const preFlop = require('../scenarios/holdem/pre-flop');
const _ = require('lodash');

function validateScenario(groupsObject, stageObject, scenario) {
  let { stage, action, position, leadUp, group, cards } = scenario;
  let potentialGroups = stageObject[action][position][leadUp];
  let potentialCards = groupsObject[group];

  expect(potentialGroups).to.include(group);
  expect(potentialCards).to.include(cards);
}

describe('getScenario', () => {

  const args = [
    { stage: 'preFlop', position: 'Early' },
    { stage: 'preFlop', position: 'Mid' },
    { stage: 'preFlop', position: 'Late' },
    { stage: 'preFlop', position: 'SB' },
    { stage: 'preFlop', position: 'BB' }
  ];

  _.each(args, a => {
    it(`should return a valid scenario for ${a.stage} stage, ${a.position} position`, () => {
      let scenario = getScenario(a.stage, a.position);
      validateScenario(groups, preFlop, scenario);
    });
  });

  it('should throw error if stage and position are not specified', () => {
    expect(getScenario.bind(this)).to.throw();
  });

});
