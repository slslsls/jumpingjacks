const _ = require('lodash');
const groups = require('../../scenarios/holdem/groups');
const preFlop = require('../../scenarios/holdem/pre-flop');
const stages = { 
  preFlop
};

function getScenario(stage, position) {
  if (!stage || !position) throw Error('stage and position are required arguments');
  let stageObject = stages[stage];
  let action = getValidAction(position, stageObject);
  let leadUp = randomObjectKey(stageObject[action][position]);
  let group = randomArrayElement(stageObject[action][position][leadUp]);
  let cards = randomArrayElement(groups[group]);
  return { stage, action, position, leadUp, group, cards };
}

function getValidAction(position, stageObject) {
  // determine eligible keys (actions) so we only traverse paths that contain the specified position
  const eligibleActions = [];
  _.each(stageObject, (obj, key) => {
    if (_.has(obj, position)) eligibleActions.push(key);
  });
  let idx = randomIntFromInterval(0, eligibleActions.length - 1);
  return eligibleActions[idx];
}

function randomObjectKey(obj) {
  let idx = randomIntFromInterval(0, Object.keys(obj).length - 1);
  return Object.keys(obj)[idx];
}

function randomArrayElement(arr) {
  let idx = randomIntFromInterval(0, arr.length - 1);
  return arr[idx];
}

function randomIntFromInterval(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

module.exports = {
  getScenario
};
