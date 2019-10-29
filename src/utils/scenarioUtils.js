const groups = require('../scenarios/groups');
const preFlop = require('../scenarios/pre-flop');
const stages = { // todo: add other stages when the json has been created
  preFlop
};

function getRandomScenario(args) {
  let stage = args && args.stage ? args.stage : randomObjectKey(stages);
  let stageObject = stages[stage];
  let action = args && args.action ? args.action : randomObjectKey(stageObject);
  let position = args && args.position ? args.position : randomObjectKey(stageObject[action]);
  let leadUp = args && args.leadUp ? args.leadUp : randomObjectKey(stageObject[action][position]);
  let potentialGroups = stageObject[action][position][leadUp];
  let group = randomArrayElement(potentialGroups);
  let cards = randomArrayElement(groups[group]);
  return { stage, action, position, leadUp, group, cards };
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
  getRandomScenario
};
